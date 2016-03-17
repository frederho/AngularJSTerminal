describe('When entering a credit card number', function () {
    var card;
    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services', 'angularTerminal.configuration'));
    beforeEach(inject(function ($controller, $httpBackend, ApiEndpoint) {
        card = $controller('creditCard', {});
        $httpBackend.expectGET(ApiEndpoint.transactionDetails).respond();
        $httpBackend.expectGET(ApiEndpoint.getIssuerList).respond();

        $httpBackend.flush();
    }));

    describe('and the credit card number is less than 4 digits long', function () {
        beforeEach(inject(function (httpService) {
            spyOn(httpService, 'getIssuer');
        }));

        it('should net attempt to contact bin service when credit card number is undefined', inject(function (httpService) {
            card.details.creditCardNumber = undefined;
            card.getIssuer();
            expect(httpService.getIssuer).not.toHaveBeenCalled();
        }));

        it('should not attemt to contact bin service', inject(function (httpService) {
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
        it('should call getIsser in httpService with current credit card number', inject(function (httpService) {
            for (var i = 3; i < 6; i++) {
                card.details.creditCardNumber += i + 1 ;
                card.getIssuer();
                expect(httpService.getIssuer.calls.argsFor(i - 3)[0]).toEqual(card.details.creditCardNumber);
            }
        }));
    });

    describe('and the credit card number is between 4 and 6 digits long', function () {
        var issuerDetails = { "CountryCode": "No", "CountryName": "Norway", "Issuer": "MasterCard", "Brand": "Shell", "CardType": "Credit card" };
        beforeEach(inject(function (httpService, $httpBackend, ApiEndpoint) {
            spyOn(httpService, 'getIssuer').and.callThrough();
            card.details.creditCardNumber = "1234";
            card.getIssuer();
            $httpBackend.expectGET(ApiEndpoint.getIssuer +"?id=" + card.details.creditCardNumber).respond(issuerDetails);
            $httpBackend.flush();

        }));
        it('should call getIsser in httpService with current credit card number', inject(function (httpService) {
            expect(httpService.getIssuer.calls.argsFor(0)[0]).toEqual(card.details.creditCardNumber);
        }));

        it('should update issuerInformation in card controller', function() {
            expect(card.issuer).toEqual(issuerDetails);
        });
    });

    describe('and something goes wrong server side', function () {
        beforeEach(inject(function (httpService, $httpBackend, ApiEndpoint) {
            spyOn(httpService, 'getIssuer').and.callThrough();
            card.details.creditCardNumber = "1234";
            card.getIssuer();
            $httpBackend.expectGET(ApiEndpoint.getIssuer + "?id=" + card.details.creditCardNumber).respond(500, "Something went wrong");
            $httpBackend.flush();

        }));
        it('should call getIsser in httpService with current credit card number', inject(function (httpService) {
            expect(httpService.getIssuer.calls.argsFor(0)[0]).toEqual(card.details.creditCardNumber);
        }));

        //What should happen here?

    });
});