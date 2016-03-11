describe('When entering a credit card number', function() {
    var card;
    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services'));
    beforeEach(inject(function($controller, $httpBackend) {
        card = $controller('creditCard', {});
    }));

    it('should work even when creditCardNumber is undefined', function() {
        card.details.creditCardNumber = undefined;
        card.getIssuer();
    });

    describe('and the credit card number is less than 4 digits long', function () {
        beforeEach(inject(function (httpService) {
            spyOn(httpService, 'getIssuer');
        }));
        it('should not attemt to contact bin service', inject(function(httpService) {
            for (var i = 0; i < 3; i++) {
                card.details.creditCardNumber += i;
                card.getIssuer();
                expect(httpService.getIssuer).not.toHaveBeenCalled();
            }
        }));
    });

    describe('and the credit card number is more than 6 digits long', function () {
        beforeEach(inject(function (httpService) {
            spyOn(httpService, 'getIssuer');
            card.details.creditCardNumber = "123456";
        }));
        it('should not attemt to contact bin service', inject(function (httpService) {
            for (var i = 6; i < 16; i++) {
                card.details.creditCardNumber += i;
                card.getIssuer();
                expect(httpService.getIssuer).not.toHaveBeenCalled();
            }
        }));
    });

    describe('and the credit card number is between 4 and 6 digits long', function () {
        beforeEach(inject(function (httpService) {
            spyOn(httpService, 'getIssuer');
            card.details.creditCardNumber = "123";
        }));
        it(' should contact bin service', inject(function (httpService) {
            for (var i = 3; i < 5; i++) {
                card.details.creditCardNumber += i;
                card.getIssuer();
                expect(httpService.getIssuer).toHaveBeenCalledWith(card.details.creditCardNumber);
            }
        }));
    });

    describe('and the credit card number is between 4 and 6 digits long', function () {
        beforeEach(inject(function (httpService, $httpBackend) {
            $httpBackend.expectGet('')
            spyOn(httpService, 'getIssuer');
            card.details.creditCardNumber = "1234";
        }));
        it(' should contact bin service', inject(function (httpService) {
                card.getIssuer();
                expect(httpService.getIssuer).toHaveBeenCalledWith(card.details.creditCardNumber);
        }));
    });

    it('should tolerate a negative response from the bin service', function() {

    });
});