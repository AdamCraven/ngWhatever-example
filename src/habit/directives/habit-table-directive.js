define([
    'text!./templates/habit-factory-directive.html'
], function (
    template
) {
    "use strict";

    return function habitFactoryDirective(habitViewModel) {
        return {
            restrict: 'E',
            template: template,
            scope : {},
            //controller : 'habitViewModel as vm',
            link: function (scope) {
                scope.vm = habitViewModel;
            }
        };
    };
});