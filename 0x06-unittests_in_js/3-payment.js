const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping, operationType = 'SUM') => {
let result;
switch (operationType) {
    case 'SUM':
        result =Utils.calculateNumber('SUM', totalAmount, totalShipping);
        break;
    case 'SUBTRACT':
        result =Utils.calculateNumber('SUBTRACT', totalAmount, totalShipping);
        break;
    case 'DIVIDE':
        result =Utils.calculateNumber('DIVIDE', totalAmount, totalShipping);
        break;
    default:
        throw new Error('Invalid type');
}
    console.log(`The total is ${result}`);
};

module.exports = sendPaymentRequestToApi;
