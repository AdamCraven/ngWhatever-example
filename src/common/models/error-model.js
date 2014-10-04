define(function() {
    "use strict";

    function ErrorModel() {
        this._errors = [];
    }

    ErrorModel.prototype = {
        clearErrors: function () {
            this._errors = [];
        },
        isErrors: function () {
            return !!this._errors;
        }
    };

    return ErrorModel;
});