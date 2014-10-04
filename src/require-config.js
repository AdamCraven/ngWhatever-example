(function () {

    "use strict";

    var config = {
        baseUrl: './scripts/',
        paths: {
            'jquery': '../bower_components/jquery/dist/jquery',
            'bootstrap': '../bower_components/flat-ui-official/js/bootstrap.min',
            'bootstrap-select': '../bower_components/flat-ui-official/js/bootstrap-select',
            'angular':'../bower_components/angular/angular',
            'angular-resource':'../bower_components/angular-resource/angular-resource',
            'angular-route': '../bower_components/angular-route/angular-route',
            'app':'./app',
            'main':'./main',
            'moment':'../bower_components/moment/moment',
            'text': '../bower_components/requirejs-plugins/lib/text',
            'appengine':'https://apis.google.com/js/client.js?onload=javascript:void(0)'
        },
        shim : {
            'bootstrap': ['jquery'],
            'bootstrap-select': {
                deps: ['jquery','bootstrap']
            },
            'angular-resource': ['angular'],
            'angular-route': ['angular'],
            'appengine' : {
                exports: 'gapi'
            },
            'app' : ['angular', 'appengine', 'angular-resource', 'angular-route', 'bootstrap', 'bootstrap-select']
        },
        // Bootstraps the application
        deps : ['main']
    };

    require.config(config);

})();

