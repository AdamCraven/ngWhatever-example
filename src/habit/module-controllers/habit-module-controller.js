define([
    '../models/habit-module-model'
], function(
    HabitModuleModel
) {
    "use strict";

    function HabitModuleController($timeout, $q, habitEndpoint, eventEndpoint) {
        this.model = new HabitModuleModel();
        this.view = {};
        this.$timeout = $timeout;
        this.$q = $q;

        this.endpoints = {
            habit: habitEndpoint,
            event: eventEndpoint
        };
    }

    HabitModuleController.prototype = {
        setProtectedApi: function(protectedApi) {},
        /**
         * Setting the view in the module-controller generally isn't needed, you can just call a scope digest.
         * But in larger apps, or when using custom renderers, that require more granular updating of the view
         * it is very useful to be explicit about what you want to refresh
         */
        setView: function(viewController) {
            this.view = viewController;
        },
        /**
         * When retrieving information back from the endpoints, refreshing the view is as simple as triggering a
         * root digest via the $timeout (which makes sure we aren't already in a digest). // Is that true?
         * You could also do an explicit scope digest here to update only this scope (and children)
         * Or an explicit render of the view
         */
        refreshView: function() {
            this.$timeout(function refreshScope() {});
            // this.view.render();
            // this.$scope.$digest();
        },

        fetchData: function() {
            this.model.loading.setLoading();

            this.$q.all([this.endpoints.habit.get(), this.endpoints.event.get()])
                .then(function habitsAndEventsLoaded(habitsAndEvents) {

                    this.model.create({
                        habits: habitsAndEvents[0],
                        events: habitsAndEvents[1]
                    });

                    this.success();
                }.bind(this));
        },

        save: function(argument) {
            //Save to server
        },

        fail: function(error) {
            this.model.error.setError(error);
            this.model.loading.finishLoading();
            this.refreshView();
        },

        success: function() {
            this.model.error.clearErrors();
            this.model.loading.finishLoading();
            this.refreshView();
        }

    };

    HabitModuleController.$inject = ['$timeout', '$q', 'habitEndpoint', 'eventEndpoint'];

    return HabitModuleController;
});