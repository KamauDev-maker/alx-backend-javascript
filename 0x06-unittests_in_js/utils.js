const Utils = {
    calculateNumber: (type, a, b) => {
        switch (type) {
            case 'SUM':
                return a + b;
            case 'SUBTRACT':
                return a - b;
            case 'DIVIDE':
                if (b === 0) {
                    throw new Error('Error');
                }
                return a / b;
            default:
                throw new Error('Invalid type');
        }
    }
}

module.exports = Utils;
