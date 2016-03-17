// JavaScript source code
angular.module('angularTerminal.controllers')
    .controller('creditCard',
    ['httpService',
        function (httpService) {
            //Local variables
            var vm = this;
            var initialCard = {
                creditCardNumber: '',
                expiryMonth: '',
                expiryYear: '',
                CVC: ''
            };
            //Exposed variables
            vm.issuer = {}
            vm.issuerList = [
                {
                    "issuerName": "Visa",
                    "issuerLogoUrl": ""
                },
                {
                    "issuerName": "MasterCard",
                    "issuerLogoUrl": ""
                },
                {
                    "issuerName": "MaestroCard",
                    "issuerLogoUrl": ""
                }
            ];

            //Exposed functions
            vm.submitDetails = submitDetails;
            vm.cancelPayment = cancelPayment;
            vm.formatCardNumber = formatCardNumber;
            vm.getIssuer = getIssuer;

            //Initialize controller 
            init();

            function formatCardNumber() {
            }

            function getTransactionDetails() {
                httpService.getTransactionDetails(function setData(data) {
                    vm.transactionDetails = data;
                });
            }

            function setIssuer(data) {
                vm.issuer = data;
            }

            function getIssuer() {
                if (vm.details.creditCardNumber  && vm.details.creditCardNumber.toString().length > 3 && vm.details.creditCardNumber.toString().length < 7) {
                    httpService.getIssuer(vm.details.creditCardNumber, setIssuer);
                } else if (vm.issuer && vm.details.creditCardNumber && vm.details.creditCardNumber.toString().length < 4) {
                    vm.issuer = {};
                }
            }

            function cancelPayment() {
            }

            function checkIfValid() {
                if (angular.equals(initialCard, vm.details)) return false;
                return true;
            }

            function submitDetails() {
                if (!checkIfValid()) return;
                httpService.submitDetails();
            }

            function init() {
                vm.details = angular.copy(initialCard);
                getTransactionDetails();
            }


        }]);
