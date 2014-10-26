define([
    './habit-model'
], function (
    HabitModel
) {
    "use strict";

    function generateId() {
        return 'id'+Math.random();
    }

    function HabitCollection(habitsArr) {
        this._habits = [];
        if(habitsArr) {
            this.create(habitsArr);
        }
    }

    HabitCollection.prototype = {
        create: function (habitsArr) {
            this._habits = habitsArr.map(function (habit) {
                return new HabitModel(habit);
            });
        },
        read: function () {
            return this._habits;
        },
        remove: function () {
            // not implemented
        }

    };

    return HabitCollection;
});