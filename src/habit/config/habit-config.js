define(function () {
    "use strict";

    return {
        // This would come from the server, as there is no backend we are mocking in here until then.
        endpoints : {
            // Simulated loading time from the server.
            loadingTime: 40,
            habits : [{
                name: 'Exercising',
                id: 'id0343'
            }, {
                name: 'Meditation',
                id: 'id4343'
            }],
            events : [{
                habitId: 'id0343',
                date: new Date().setDate(16),
            }, {
                habitId: 'id0343',
                date: new Date().setDate(15),
                points: 23,
            }, {
                habitId: 'id0343',
                date: new Date().setDate(17),
            }, {
                habitId: 'id0343',
                date: new Date().setDate(18),
                points: 10,
            }, {
                habitId: 'id0343',
                date: new Date().setDate(19),
                points: 10,
            }, {
                habitId: 'id0343',
                date: new Date().setDate(20),
            }, {
                habitId: 'id0343',
                date: new Date().setDate(21),
                points: 20,
            }, {
                habitId: 'id4343',
                date: new Date().setDate(16),
                points: 20,
            }, {
                habitId: 'id4343',
                date: new Date().setDate(15),
                points: 23,
            }, {
                habitId: 'id4343',
                date: new Date().setDate(17),
                points: -20,
            }, {
                habitId: 'id4343',
                date: new Date().setDate(18),
            }, {
                habitId: 'id4343',
                date: new Date().setDate(19),
            }, {
                habitId: 'id4343',
                date: new Date().setDate(20),
                points: 0,
            }, {
                habitId: 'id4343',
                date: new Date().setDate(21),
                points: 20,
            }]

        }
    };
});