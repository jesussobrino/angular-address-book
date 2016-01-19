'use strict';

/* Directives */

var contactsDirectives = angular.module('contactsDirectives', []);

contactsDirectives.directive('userForm', function(){
return{
    restrict: 'E',
    scope: {
        userModel: '='
    },
    templateUrl: 'partials/user-form.html',
    replace: true
}
});