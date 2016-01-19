'use strict';

/* Controllers */

var contactsControllers = angular.module('contactsControllers', []);

contactsControllers.controller('ContactListCtrl', ['$scope', 'contactsService', '$localForage',
    function ($scope, contactsService, $localForage) {
        contactsService.getContacts().then(function (data) {
            $scope.contacts = data;
        });

        $scope.$watch('contacts', function (newValue, oldValue) {
            $localForage.setItem('contacts', newValue);
        });
        $scope.orderProp = 'name';


    }]);

contactsControllers.controller('ContactCreateCtrl', ['$scope', 'contactsService', '$localForage',
    function ($scope, contactsService, $localForage) {
        $scope.createContact = function () {
            if ($scope.userForm.$valid) {
                contactsService.addContact($scope.contact);
            }
        };
    }]);

contactsControllers.controller('ContactDetailCtrl', ['$scope', 'contactsService', '$localForage',
    function ($scope, contactsService, $localForage) {
        $scope.editContact = function () {
            if ($scope.userForm.$valid) {
                contactsService.editContact($scope.contact);
            }
        };
    }]);

//contactsControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'contactsService',
//  function($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl;
//    };
//  }]);
