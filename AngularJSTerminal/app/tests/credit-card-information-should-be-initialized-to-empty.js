describe('When initializing the credit card controller', function () {
    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services'));
    var card;
    beforeEach(inject(function ($controller, $httpBackend, httpService) {
        $httpBackend.expectGET('http://localhost:24257/api/transaction').respond({data:{
            OrderDescription: "Description",
            OrderNumber: 1234,
            Price: 957,
            Currency: "NOK"
        }});
        spyOn(httpService, 'getTransactionDetails').and.callThrough();
        card = $controller('creditCard', { httpService: httpService });
        $httpBackend.flush();
    }));

    afterEach(inject(function($httpBackend) {
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

    it('should get data transaction information', inject(function (httpService) {
        expect(httpService.getTransactionDetails).toHaveBeenCalled();
        expect(card.transactionDetails).toBeDefined();
    }));
});