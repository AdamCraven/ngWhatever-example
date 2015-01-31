define(function() {
    "use strict";

    class EventModel {
        constructor(eventObj) {
            if (eventObj) {
                this.id = eventObj.id;
                this.habitId = eventObj.habitId;
                this.date = eventObj.date;
                this._points = (eventObj.points && parseInt(eventObj.points, 10));
            }
        }
        set points(points) {
            if (points !== undefined) {
                this._points = points;
            }
        }
        get points() {
            return this._points;
        }
        create(eventObj) {
            EventModel.call(this, eventObj);
        }
        rating() {
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
    }

    return EventModel;
});