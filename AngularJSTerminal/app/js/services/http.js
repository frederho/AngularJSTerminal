// JavaScript source code
angular.module('angularTerminal.services')
    .factory('httpService', ['$http',
        function ($http) {

            var service = {
                'getTransactionDetails': getTransactionDetails,
                'submitDetails': submitDetails,
                'getIssuer': getIssuer
            }


            function getIssuer(cardNumber, onSuccess) {
                $http.get('http://localhost:24257/api/creditCard?id=' + cardNumber).then(function (result) {
                    onSuccess(result.data);
                });
            };

            function getIssuerListForMerchants() {
                
            };


            function submitDetails() {
            };

            function getTransactionDetails(onSuccess) {
                $http.get('http://localhost:24257/api/transaction').then(function (result) {
                    onSuccess(result.data);
                });
            }

            function onError() {
                
            };



            return service;
        }
    ]);
