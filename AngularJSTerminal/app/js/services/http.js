// JavaScript source code
angular.module('angularTerminal.services')
    .factory('httpService',
    ['$http', 'ApiEndpoint',
        function ($http, ApiEndpoint) {
            var service = {
                'getTransactionDetails': getTransactionDetails,
                'submitDetails': submitDetails,
                'getIssuer': getIssuer,
                'getIssuerList': getIssuerListForMerchant
            }


            function getIssuer(cardNumber, onSuccess) {
                $http.get(ApiEndpoint.getIssuer + '?id=' + cardNumber).then(function (result) {
                    onSuccess(result.data);
                });
            };

            function getIssuerListForMerchant() {
                
            };


            function submitDetails() {
            };

            function getTransactionDetails(onSuccess) {
                $http.get(ApiEndpoint.transactionDetails).then(function (result) {
                    onSuccess(result.data);
                });
            }

            function onError() {
                
            };



            return service;
        }
    ]);
