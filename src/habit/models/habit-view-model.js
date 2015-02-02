define([
    './event-collection',
    './habit-collection',
    '../../common/models/loading-model',
    '../../common/models/error-model',
], function(
    EventCollection,
    HabitCollection,
    LoadingModel,
    ErrorModel
) {

    "use strict";

    class HabitViewModel {
        constructor(controller) {
            // The view models public properties are available to the the view.
            this.loading = new LoadingModel();
            this.error = new ErrorModel();
            this.habits = new HabitCollection();
            this.events = new EventCollection();
            this.controller = controller;
            this.controller.setModel(this);
        }
        create(modelData) {
            this.habits.create(modelData.habits);
            this.events.create(modelData.events);
        }
        getHabits() {
            return this.habits.read();
        }
        getTotalPoints() {
            return this.events.getTotalPoints();
        }
        getEventsFilteredByHabit(habit) {
            return this.events.readByHabit(habit);
        }
        getTotalPointsForHabit(habit) {
            return this.events.getTotalPointsForHabit(habit);
        }
        isLoading() {
            return this.loading.isLoading();
        }
        save() {
            // This method has an external effect, i.e. it doesn't just modify data in the models
            // It interacts with the server.
            this.controller.save();
        }
    }

    HabitViewModel.$inject = ['habitController'];

    return HabitViewModel;
});