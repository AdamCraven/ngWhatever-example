define(function() {
    "use strict";

    class ErrorModel {
        constructor() {
            this._errors = [];
        }
        clearErrors() {
            this._errors = [];
        }
        isErrors() {
            return !!this._errors;
        }
    }

    return ErrorModel;
});