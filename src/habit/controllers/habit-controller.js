define(function() {
    "use strict";

    /**
     * The controller is an API for the view.
     * It knows about the models and makes accessing them easier.
     * It CAN NOT communicate with the server
     * It DOES NOT handle data returned from the server.
     */
    class HabitFactoryController {
        constructor($scope, moduleController) {
            this.moduleController = moduleController;
            this.model = moduleController.model;
        }
        getHabits() {
            // In this instance this method is mediating to the model.
            // You can talk directly to the model.
            // This is the presentation model/view model pattern which works well in larger applications.
            //
            // In larger modules you may need to seperate your domain logic from view logic, and thus create
            // view models and domain models.
            //
            // The result would leave this controller with one method 'save', as the save function
            // causes side effects outside of the module (communication with the server).
            return this.model.habits.read();
        }
        getTotalPoints() {
            return this.model.events.getTotalPoints();
        }
        getEventsFilteredByHabit(habit) {
            return this.model.events.readByHabit(habit);
        }
        getTotalPointsForHabit(habit) {
            return this.model.events.getTotalPointsForHabit(habit);
        }
        isLoading() {
            return this.model.loading.isLoading();
        }
        save() {
            // Saves the changes from the table.
            // The module controller handles this as it can communicate with the server.
            this.moduleController.save();
        }
    }

    HabitFactoryController.$inject = ['$scope', 'habitModuleController'];

    return HabitFactoryController;
});