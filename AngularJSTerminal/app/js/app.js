//Angular app is defined here, the dependencies needed are listed in the []. 
//Make sure to reference to this module without the [].
angular.module("angularTerminal", ["angularTerminal.controllers", "ui.router"])
	.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('creditCard');
        $stateProvider
            .state("creditCard", {
                url: "/creditCard",
                templateUrl: "app/templates/creditCard.html",
                controller: "creditCard as card"
            });
    }]);