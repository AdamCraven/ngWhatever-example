define([
    './habit-model'
], function (
    HabitModel
) {
    "use strict";

    function generateId() {
        return 'id'+Math.random();
    }

    class HabitCollection {
        constructor (habitsArr) {
            this._habits = [];
            if(habitsArr) {
                this.create(habitsArr);
            }
        }
        create (habitsArr) {
            this._habits = habitsArr.map(function (habit) {
                return new HabitModel(habit);
            });
        }
        read () {
            return this._habits;
        }
        remove() {
            // not implemented
        }
    }

    return HabitCollection;
});