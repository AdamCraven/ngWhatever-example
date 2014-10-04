define([
], function(
) {
    "use strict";

    function EventModel(eventObj) {
        if(eventObj) {
            this.id = eventObj.id;
            this.habitId = eventObj.habitId;
            this.date = eventObj.date;
            this.points = (eventObj.points && parseInt(eventObj.points, 10));
            this.effort = (eventObj.effort && parseInt(eventObj.effort, 10));
        }
    }

    EventModel.prototype = {
        create: function (eventObj) {
            EventModel.call(this, eventObj);
        },
        setPoints: function (points) {
            if (points !== undefined) {
                this.points = points;
            }
            return this.points;
        },
        effort: function (effort) {
            if (effort !== undefined) {
                this._effort = effort;
            }
            return this._effort;
        },
        className: function () {
            if (this.points > 0) {
                return 'positive';
            } else if (this.points === 0) {
                return 'neutral';
            } else if (this.points < 0) {
                return 'negative';
            } else {
                return '';
            }
        }
    };

    return EventModel;
});