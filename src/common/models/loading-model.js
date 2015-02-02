define(function() {
    "use strict";

    class LoadingModel {
        constructor() {
            this._loading = true;
        }
        setLoading() {
            this._loading = true;
        }
        finishLoading() {
            this._loading = false;
        }
        isLoading() {
            return this._loading;
        }
    }

    return LoadingModel;
});