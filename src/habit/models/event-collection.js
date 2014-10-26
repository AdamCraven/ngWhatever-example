define([
    './event-model'
], function (
    EventModel
) {
    "use strict";

    function EventCollection(eventArr) {
        this._events = [];
        if(eventArr) {
            this.create(eventArr);
        }
    }

    EventCollection.prototype = {
        create: function (eventArr) {
            this._events = eventArr.map(function (event) {
                return new EventModel(event);
            });
        },
        readByHabit: function (habit) {
            var habitId = habit.id;
            var events =  this._events.filter(function (event) {
                if(event.habitId === habitId) {
                    return true;
                }
            });

            return events;
        },
        read: function () {
            return this._events;
        },
        getTotalPointsForHabit: function (habit) {
            return this.readByHabit(habit).reduce(function (pv, cv) {
                return (cv.points || 0) + (pv || 0);
            }, 0);
        },
        getTotalPoints: function () {
            return this._events.reduce(function (pv, cv) {
                return (cv.points || 0) + (pv || 0);
            }, 0);
        }
    };

    return EventCollection;
});