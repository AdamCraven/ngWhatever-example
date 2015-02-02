
require.config({
    baseUrl: '../dist/',
    paths: {
        'app':'./app',
        'main':'./main',
        'moment':'../bower_components/moment/moment',
        'text': '../bower_components/requirejs-plugins/lib/text',
        'regenerator': '../node_modules/regenerator'
    },
    shim : {}

});


require([
    'regenerator/runtime',
    'app'
], function(
) {
    "use strict";

    angular.bootstrap(document, ['main-app']);

   // jQuery("select[name='frequency_period']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
});



