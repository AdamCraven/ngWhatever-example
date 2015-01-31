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
            // The controllers use public objects to the display the view.
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
            // In this instance this method is mediating to the model.
            // You can talk directly to the model.
            // This is the presentation model/view model pattern which works well in larger applications.
            //
            // In larger modules you may need to seperate your domain logic from view logic, and thus create
            // view models and domain models.
            //
            // The result would leave this controller with one method 'save', as the save function
            // causes side effects outside of the module (communication with the server).
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
            this.controller.save();
        }
    }

    HabitViewModel.$inject = ['habitController'];

    return HabitViewModel;
});