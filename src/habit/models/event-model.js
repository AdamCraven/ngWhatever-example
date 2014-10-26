define(function() {
    "use strict";

    function EventModel(eventObj) {
        if(eventObj) {
            this.id = eventObj.id ;
            this.habitId = eventObj.habitId;
            this.date = eventObj.date;
            this._points = (eventObj.points && parseInt(eventObj.points, 10));
        }
    }

    EventModel.prototype = {
        set points(points) {
            if (points !== undefined) {
                this._points = points;
            }
        },
        get points() {
            return this._points;
        },
        create: function (eventObj) {
            EventModel.call(this, eventObj);
        },
        rating: function () {
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