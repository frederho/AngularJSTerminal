// JavaScript source code
angular.module('angularTerminal.controllers')
    .controller('creditCard',
    ['httpService',
        function (httpService) {
            var vm = this;
            var initialCard = {
                creditCardNumber: '',
                expiryMonth: '',
                expiryYear: '',
                CVC: ''
            };

            vm.submitDetails = submitDetails;
            vm.cancelPayment = cancelPayment;
            vm.formatCardNumber = formatCardNumber;
            vm.getIssuer = getIssuer;

            function formatCardNumber() {
            }

            function getTransactionDetails () {
                httpService.getTransactionDetails(function setData(data) {
                    vm.transactionDetails = data;
                });
            }

            function setIssuer(data) {
                vm.issuer = data;
            }

            function getIssuer() {
                if (vm.details.creditCardNumber && (vm.details.creditCardNumber.toString().length < 4 || vm.details.creditCardNumber.toString().length > 6 )) {
                    return;
                }
                httpService.getIssuer(vm.details.creditCardNumber, setIssuer);
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

            init();
        }]);
