// JavaScript source code
describe('when getting collection, should get data', function() {
    beforeEach(module('angularTerminal.services'));
    beforeEach(inject(function(httpService, $httpBackend) {
       

    }));

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingRequest();
    }));
    

});