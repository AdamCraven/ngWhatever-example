define(function() {
    "use strict";

    function generateId() {
        return 'id' + Math.random();
    }

    class HabitModel {
        constructor(habitData) {
            this._id = habitData.id || generateId();
            this._name = habitData.name || '';
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get id() {
            return this._id;
        }
    }

    return HabitModel;
});