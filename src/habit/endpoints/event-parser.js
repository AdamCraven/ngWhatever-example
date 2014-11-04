define(function() {
    "use strict";

    // The event parser transforms data between the client and server
    var eventParser = {
        // Transform client data to server
        encode: function(data) {
            // implementation goes here
            return data;
        },
        // Transform server data to client.
        decode: function(data) {
            // implementation goes here
            return data;
        }
    };

    return eventParser;
});