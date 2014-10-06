define(function() {
    "use strict";

    function HabitFactoryController($scope, moduleController) {
        this.moduleController = moduleController;
        this.model = moduleController.model;
    }

    HabitFactoryController.prototype = {
        getHabits: function() {
            return this.model.habits.read();
        },
        getTotalPoints: function() {
            return this.model.events.getTotalPoints();
        },
        getEventsFilteredByHabit: function(habit) {
            return this.model.events.readByHabit(habit);
        },
        getTotalPointsForHabit: function(habit) {
            return this.model.events.getTotalPointsForHabit(habit);
        },
        isLoading: function() {
            return this.model.loading.isLoading();
        },
        save: function() {
            this.moduleController.save();
        }
    };

    HabitFactoryController.$inject = ['$scope', 'habitModuleController'];

    return HabitFactoryController;
});