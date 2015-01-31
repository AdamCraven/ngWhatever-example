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

    class HabitModuleModel {
        constructor(modelData) {
            // The controllers use public objects to the display the view.
            this.loading = new LoadingModel();
            this.error = new ErrorModel();
            this.habits = new HabitCollection();
            this.events = new EventCollection();

            if (modelData) {
                this.create(modelData);
            }
        }
        create(modelData) {
            this.habits.create(modelData.habits);
            this.events.create(modelData.events);
        }
    }

    return HabitModuleModel;
});