define(function () {
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
                return {
                    name : habit.name,
                    id: habit.id || generateId()
                };
            });
        },
        read: function () {
            return this._habits;
        },
        update: function (habitToUpdate) {
            var habit = this._habits.filter(function (habit) {
                if (habit.id === habitToUpdate.id) {
                    return true;
                }
            });
            habit[0].name = habitToUpdate.name;
        },
        remove: function () {
            // not implemented
        }

    };

    return HabitCollection;
});