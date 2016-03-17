//// JavaScript source code
//// JavaScript source code
//describe('When submitting creditcard details', function () {

//    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services'));

//    //Using controller as with VM means that we do not have to work with scope.
//    //any property we expect to find in the controller scope is assigned to the controller directly
//    var card;
//    beforeEach(inject(function ($controller) {
//        card = $controller('creditCard', {});
//        spyOn(card, 'submitDetails').and.callThrough();
//    }));

//    it('it should not submit incomplete payment details', inject(function (httpService) {
//        spyOn(httpService, 'submitDetails').and.callThrough();

//        card.submitDetails();
//        expect(card.submitDetails).toHaveBeenCalled();
//        expect(httpService.submitDetails).not.toHaveBeenCalled();

//    }));

//});// JavaScript source code
//// JavaScript source code
//describe('When submitting creditcard details', function () {

//    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services'));

//    //Using controller as with VM means that we do not have to work with scope.
//    //any property we expect to find in the controller scope is assigned to the controller directly
//    var card;
//    beforeEach(inject(function ($controller) {
//        card = $controller('creditCard', {});
//        spyOn(card, 'submitDetails').and.callThrough();
//    }));

//    it('it should not submit incomplete payment details', inject(function (httpService) {
//        spyOn(httpService, 'submitDetails').and.callThrough();

//        card.submitDetails();
//        expect(card.submitDetails).toHaveBeenCalled();
//        expect(httpService.submitDetails).not.toHaveBeenCalled();

//    }));

//});