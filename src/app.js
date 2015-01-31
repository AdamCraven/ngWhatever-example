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
        setTimeout(function() {habitApi.fetchData();}, 10);
    }]);


    return module;
});