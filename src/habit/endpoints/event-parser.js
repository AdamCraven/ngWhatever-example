define(function () {
    "use strict";

    // The event parser transforms data between the client and server
    var eventParser = {
        // Transform client data to server
        encode: function (data) {
            // Not implemented. Would
            return data;
        },
        // Transform server data to client.
        decode: function (data) {
            return data;
        }
    };

    return eventParser;
});