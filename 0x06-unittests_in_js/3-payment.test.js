const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20, 'SUBTRACT');
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('SUBTRACT', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20, 'DIVIDE');
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('DIVIDE', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
});
