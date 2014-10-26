define(function () {
    "use strict";

    function generateId() {
        return 'id' + Math.random();
    }

    function HabitModel(habitData) {
        this._id = habitData.id || generateId();
        this._name = habitData.name || '';
    }

    HabitModel.prototype = {
        get name() {
            return this._name;
        },
        set name(name) {
            this._name = name;
        },
        get id() {
            return this._id;
        }
    };

    return HabitModel;
});