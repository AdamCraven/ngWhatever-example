define([
    './habit/habit-module',
], function (
    HabitModule
) {
    "use strict";

    var module = angular.module('main-app', [
        'ngResource',
        'ngRoute',
        'habit'
    ]).run(['habitApi', function (habitApi) {
        //Bootstrapping occurs here
        habitApi.fetchData();
    }]);




    return module;
});