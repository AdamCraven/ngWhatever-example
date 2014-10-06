define([
    'text!./templates/habit-factory-directive.html'
], function (
    template
) {
    "use strict";

    return function habitFactoryDirective() {
        return {
            restrict: 'E',
            template: template,
            scope : {},
            controller : 'habitController as controller'
        };
    };
});