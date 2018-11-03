const sum = require('./sum');

describe('sum', () => {
    it('adds two numbers', () => {
        expect(sum(3, 4)).toEqual(7);
    });
});
