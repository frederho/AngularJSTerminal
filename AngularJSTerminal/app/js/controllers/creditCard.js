// JavaScript source code
angular.module('angularTerminal.controllers')
    .controller('creditCard',
    ['httpService',
        function (httpService) {

            var vm = this;

            //Local variables
            var initialCard = {
                creditCardNumber: '',
                expiryMonth: '',
                expiryYear: '',
                CVC: ''
            };

            //Exposed variables
            vm.issuer = {}
            vm.issuerList = [];



            //Exposed functions
            vm.submitDetails = submitDetails;
            vm.cancelPayment = cancelPayment;
            vm.formatCardNumber = formatCardNumber;
            vm.getIssuer = getIssuer;
            vm.getStyle = getStyle;
            //Initialize controller 
            init();

            function formatCardNumber() {
            }

            function getStyle(issuer) {
                if(vm.issuer)
                console.log(issuer.Name, vm.issuer.Issuer);
                return issuer.Name === vm.issuer.Issuer ? "selected-issuer" : "fade-logo";
            }

            function setIssuerList(data) {
                vm.issuerList = data;
            }

            function getIssuerList() {
                httpService.getIssuerList(setIssuerList);
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
                getIssuerList();
            }


        }]);
