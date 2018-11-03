const letters = require('./letters');

describe('letters', () => {
    describe('missing letters', () => {
        it('a String of the alphabet returns an empty string', () => {
            expect(letters.findMissingLetters('abcdefghijklmnopqrstuvwxyz')).toEqual('');
        });

        it('a String with every letter returns an empty string', () => {
            expect(letters.findMissingLetters('A quick brown fox jumps over the lazy dog')).toEqual('');
        });

        it('a String with some letters of the alphabet, but not all, returns only the missing letters', () => {
            expect(letters.findMissingLetters('A slow yellow fox crawls under the proactive dog')).toEqual('bjkmqz');
        });

        it('empty string returns every letter', () => {
            expect(letters.findMissingLetters('')).toEqual('abcdefghijklmnopqrstuvwxyz');
        });
    });
});
