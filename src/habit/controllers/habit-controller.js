define([], function() {
    "use strict";

    class HabitController {
        constructor($timeout, endpoint) {
            this.model = null;
            this.view = {};
            this.$timeout = $timeout;
            this.endpoint = endpoint;
        }

        setModel(model) {
            this.model = model;
        }

        setProtectedApi(protectedApi) {}
        /**
         * Setting the view in the module-controller generally isn't needed, you can just call a scope digest.
         * But in larger apps, or when using custom renderers, that require more granular updating of the view
         * it is very useful to be explicit about what you want to refresh
         */
        setView(viewController) {
            this.view = viewController;
        }
        /**
         * When retrieving information back from the endpoints, refreshing the view is as simple as triggering a
         * root digest via the $timeout (which makes sure we aren't already in a digest). // Is that true?
         * You could also do an explicit scope digest here to update only this scope (and children)
         * Or an explicit render of the view
         */
        refreshView() {
            this.$timeout(function refreshScope() {});
            // this.view.render();
            // this.$scope.$digest();
        }

        fetchData() {
            this.model.loading.setLoading();

            this.endpoint.getHabitsAndEvents()
                .then(function habitsAndEventsLoaded(habitsAndEvents) {
                    this.model.create({
                        habits: habitsAndEvents[0],
                        events: habitsAndEvents[1]
                    });
                    this.success();
                }.bind(this));
        }

        save(argument) {
            this.model.loading.setLoading();

            this.endpoint.saveHabitAndEvents(this.model.habits.read(), this.model.events.read())
                .then(
                    this.success.bind(this),
                    this.fail.bind(this)
                );
        }

        fail(error) {
            this.model.error.setError(error);
            this.model.loading.finishLoading();
            this.refreshView();
        }

        success() {
            this.model.error.clearErrors();
            this.model.loading.finishLoading();
            // The refresh view isn't needed with angular $q promises, but if you are using an external
            // library, this would be required.
            this.refreshView();
        }
    }

    HabitController.$inject = ['$timeout', 'habitModuleEndpoint'];

    return HabitController;
});