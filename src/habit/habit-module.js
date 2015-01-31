define([
    './controllers/habit-controller',
    './directives/habit-table-directive',
    './models/habit-view-model',
    './endpoints/habit-module-endpoint',
    './endpoints/habit-endpoint',
    './endpoints/event-endpoint',
    './config/habit-config',
    './habit-api'
], function (
    HabitController,
    habitDirective,
    HabitViewModel,
    HabitModuleEndpoint,
    HabitEndpoint,
    EventEndpoint,
    habitConfig,
    HabitApi
) {
    "use strict";

    var module = angular.module('habit', ['ngResource'])
        //.controller('habitController', HabitController)
        .directive('habitTable', habitDirective)
        .constant('habitConfig', habitConfig)
        .service('habitController', HabitController)
        .service('habitViewModel', HabitViewModel)
        .service('habitEndpoint', HabitEndpoint)
        .service('eventEndpoint', EventEndpoint)
        .service('habitModuleEndpoint', HabitModuleEndpoint)
        .service('habitApi', HabitApi);

    return module;
});