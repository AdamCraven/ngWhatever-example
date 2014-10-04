define([
    './event-model'
], function (
    EventModel
) {
    "use strict";


    function addMissingDates(eventDates, dateFrom, dateTo, habitId) {
        var total = [];
        var dateRangeInDays = moment(dateTo).diff(dateFrom, 'days') + 1;
        if (dateRangeInDays < 0) {
            throw new Error('dateFrom and dateTo in wrong order');
        }
        var currentDay = 0;

        for (var i = 0; i < dateRangeInDays; i++) {
            var dayToCheck = moment(dateFrom).add('days', i).startOf('day');
            var dayIndex = (eventDates[currentDay] && moment(eventDates[currentDay].date).startOf('day'));

            if (dayToCheck.isSame(dayIndex) ) {
                total.push(eventDates[currentDay]);
                currentDay++;
            } else {
                total.push(new EventModel({
                    date:dayToCheck.format('YYYY-MM-DD'),
                    habitId: habitId
                }));
            }
        }

        return total;
    }

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