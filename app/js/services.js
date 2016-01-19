'use strict';

/* Services */

var contactsServices = angular.module('contactsServices', ['ngResource']);

contactsServices.service('contactsService', ['$q', '$http', function ($q, $http) {
    //$localForage.setItem('contacts', contacts);

    this.resetContact = function () {
        return {
            name: '',
            surname: '',
            email: '',
            address: '',
            zipCode: '',
            city: '',
            country: ''
        };
    };

    this.addContact = function (contact) {
        var nextId = contacts.length + 1;
        contact.id = nextId;
        contacts.push(contact);
    };

    this.editContact = function (contact) {
        contacts[contact.id] = contact;
    };

    this.getContact = function (id, getObj) {
        for (var i = 0, l = contacts.length; i < l; i += 1) {
            if (contacts[i].id === id) {
                return getObj ? contacts[i] : i;
                break;
            }
        }
    };

    this.getContacts = function () {
        var deferred = $q.defer();
        $http.get('phones/users.json')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (error) {
                deferred.reject(error)
            });

        return deferred.promise;
    };

}
]);