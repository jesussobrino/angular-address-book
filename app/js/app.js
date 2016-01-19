'use strict';

/* App Module */

var contactsApp = angular.module('contactsApp', [
    'ngRoute',
    'LocalForageModule',
    'contactsControllers',
    'contactsServices',
    'contactsDirectives'
]);

contactsApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/contacts', {
            templateUrl: 'partials/contact-list.html',
            controller: 'ContactListCtrl'
        }).
        when('/contacts/:phoneId', {
            templateUrl: 'partials/contact-detail.html',
            controller: 'ContactDetailCtrl'
        }).
        when('/contacts/add-contact', {
            templateUrl: 'partials/contact-create.html',
            controller: 'ContactCreateCtrl'
        }).
        otherwise({
            redirectTo: '/contacts'
        });
    }]);
