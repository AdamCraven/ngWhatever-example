define([
    './event-model'
], function(
    EventModel
) {
    "use strict";

    class EventCollection {
        constructor(eventArr) {
            this._events = [];
            if (eventArr) {
                this.create(eventArr);
            }
        }
        create(eventArr) {
            this._events = eventArr.map(function(event) {
                return new EventModel(event);
            });
        }
        readByHabit(habit) {
            var habitId = habit.id;
            var events = this._events.filter(function(event) {
                if (event.habitId === habitId) {
                    return true;
                }
            });

            return events;
        }
        read() {
            return this._events;
        }
        getTotalPointsForHabit(habit) {
            return this.readByHabit(habit).reduce(function(pv, cv) {
                return (cv.points || 0) + (pv || 0);
            }, 0);
        }
        getTotalPoints() {
            return this._events.reduce(function(pv, cv) {
                return (cv.points || 0) + (pv || 0);
            }, 0);
        }
    }

    return EventCollection;
});