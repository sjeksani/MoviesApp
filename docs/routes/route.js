var app = angular.module("routesModule", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
    });

    $stateProvider.state('page1', {
        url: '/page1',
        templateUrl: 'page1/page1.html'
    });

    $stateProvider.state('page2', {
        url: '/page2',
        templateUrl: 'page2/page2.html'
    });
});
