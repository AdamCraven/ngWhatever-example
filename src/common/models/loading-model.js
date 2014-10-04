define(function() {
    "use strict";

    function LoadingModel() {
        this._loading = true;
    }

    LoadingModel.prototype = {
        setLoading: function () {
            this._loading = true;
        },
        finishLoading: function () {
            this._loading = false;
        },
        isLoading: function () {
            return this._loading;
        }
    };

    return LoadingModel;
});