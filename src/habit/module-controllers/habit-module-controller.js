define([
    '../models/habit-module-model'
], function(
    HabitModuleModel
) {
    "use strict";

    function HabitModuleController($timeout, endpoint) {
        this.model = new HabitModuleModel();
        this.view = {};
        this.$timeout = $timeout;
        this.endpoint = endpoint;
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
         * root digest via the $timeout (which makes sure we aren't already in a digest).
         * You could also use the more effiecient explicit scope.$digest() here to update only this scope (and children)
         * Or an explicit render of the view, if for example your view is not an angular view (e.g. using d3.js to render)
         */
        refreshView: function() {
            this.$timeout(function refreshScope() {});
            // this.view.render();
            // this.$scope.$digest();
        },

        fetchData: function() {
            this.model.loading.setLoading();

            this.endpoint.getHabitsAndEvents()
                .then(function habitsAndEventsLoaded(habitsAndEvents) {
                    this.model.create({
                        habits: habitsAndEvents[0],
                        events: habitsAndEvents[1]
                    });
                    this.success();
                }.bind(this));
        },

        save: function(argument) {
            this.model.loading.setLoading();

            this.endpoint.saveHabitAndEvents(this.model.habits.read(), this.model.events.read())
                .then(
                    this.success.bind(this),
                    this.fail.bind(this)
                );
        },

        fail: function(error) {
            this.model.error.setError(error);
            this.model.loading.finishLoading();
            this.refreshView();
        },

        success: function() {
            this.model.error.clearErrors();
            this.model.loading.finishLoading();
            // The refresh view isn't needed with angular $q promises, but if you are using an external
            // library, this would be required.
            this.refreshView();
        }

    };

    HabitModuleController.$inject = ['$timeout', 'habitModuleEndpoint'];

    return HabitModuleController;
});
