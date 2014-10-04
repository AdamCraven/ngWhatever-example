define([
    './controllers/habit-controller',
    './directives/habit-table-directive',
    './module-controllers/habit-module-controller',
    './endpoints/habit-endpoint',
    './endpoints/event-endpoint',
    './config/habit-config',
    './habit-api'
], function (
    HabitController,
    habitDirective,
    HabitModuleController,
    HabitEndpoint,
    EventEndpoint,
    habitConfig,
    HabitApi
) {
    "use strict";

    var module = angular.module('habit', ['ngResource'])
        .controller('habitController', HabitController)
        .directive('habitTable', habitDirective)
        .constant('habitConfig', habitConfig)
        .service('habitModuleController', HabitModuleController)
        .service('habitEndpoint', HabitEndpoint)
        .service('eventEndpoint', EventEndpoint)
        .service('habitApi', HabitApi);

    return module;
});