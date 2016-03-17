describe('When initializing the credit card controller', function () {
    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services', 'angularTerminal.configuration'));
    var card;
    var issuerList = [{ "IssuerId": 3, "Name": "visa", "AltText": "Visa", "ImgUrl": "https://dev.epayment.nets.eu/images/Issuers/icons/visa.png" }, { "IssuerId": 4, "Name": "MasterCard", "AltText": "Master Card", "ImgUrl": "https://dev.epayment.nets.eu/images/icons/Issuers/mastercard.gif" }, { "IssuerId": 3, "Name": "Maestro", "AltText": "Meastro", "ImgUrl": "https://dev.epayment.nets.eu/images/Issuers/icons/meastro.png" }]



    beforeEach(inject(function ($controller, $httpBackend, httpService, ApiEndpoint) {
        $httpBackend.expectGET(ApiEndpoint.transactionDetails).respond({
            data: {
                OrderDescription: "Description",
                OrderNumber: 1234,
                Price: 957,
                Currency: "NOK"
            }
        });
        $httpBackend.expectGET(ApiEndpoint.getIssuerList).respond(issuerList);

        spyOn(httpService, 'getTransactionDetails').and.callThrough();
        card = $controller('creditCard', { httpService: httpService });
        $httpBackend.flush();
    }));

    afterEach(inject(function ($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
    }));

    it('should initialize card information to be empty', function () {
        expect(card.details).toEqual({
            creditCardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            CVC: ''
        });
    });

    it('should setup issuerList based on response', function() {
        expect(card.issuerList).toEqual(issuerList);
    });



    it('should get data transaction information', inject(function (httpService) {
        expect(httpService.getTransactionDetails).toHaveBeenCalled();
        expect(card.transactionDetails).toBeDefined();
    }));
});