angular.module('angularTerminal.configuration')
    .constant('ApiEndpoint', {
        'base': 'http://localhost:24257/',
        'transactionDetails': 'http://localhost:24257/getTransactionDetails',
        'getIssuer': 'http://localhost:24257/getIssuer',
        'getIssuerList': 'http://localhost:24257/getIssuerList'
    });