const letters = require('./letters');

const oneSecond = 1e9;
describe('letters', () => {
    describe('missing letters', () => {
        it('a String of the alphabet returns an empty string', () => {
            expect(letters.findMissingLetters('abcdefghijklmnopqrstuvwxyz')).toEqual('');
        });

        it('a String of the alphabet returns an empty string, even with All Caps', () => {
            expect(letters.findMissingLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toEqual('');
        });

        it('a String with every letter returns an empty string', () => {
            expect(letters.findMissingLetters('A quick brown fox jumps over the lazy dog')).toEqual('');
        });

        it('a String with some letters of the alphabet, but not all, returns only the missing letters', () => {
            expect(letters.findMissingLetters('A slow yellow fox crawls under the proactive dog')).toEqual('bjkmqz');
        });

        it('a String with some letters of the alphabet, but not all, returns only the missing letters, Always returns lower', () => {
            expect(letters.findMissingLetters('A slow yellow fox crawls under the proactive dog')).toEqual('bjkmqz');
        });

        it('ignores punctuation', () => {
            expect(letters.findMissingLetters('!,.!@#$%^&*()-_=+:";{}[]|<>?abcdefghijklmnopqrstuvwxyz')).toEqual('');
            expect(letters.findMissingLetters('!,.!@#$%^&*()-_=+:";{}[]|<>?')).toEqual('abcdefghijklmnopqrstuvwxyz');
        });

        it('empty string returns every letter', () => {
            expect(letters.findMissingLetters('')).toEqual('abcdefghijklmnopqrstuvwxyz');
        });

        it('Can process ten thousand random strings in under a second', () => {
            const randomStrings = [];
            for (let i = 0; i < 10000; i += 1) {
                let randomString = '';
                const numberOfChars = Math.random() * 50;
                for (let j = 0; j < numberOfChars; j += 1) {
                    randomString += String.fromCharCode(Math.random() * (127 - 33) + 33);
                }
                randomStrings.push(randomString);
            }

            const begin = process.hrtime();
            for (let i = 0; i < randomStrings.length; i += 1) {
                letters.findMissingLetters(randomStrings[i]);
            }
            const end = process.hrtime();
            const nanoseconds = (end[0] * oneSecond + end[1]) - (begin[0] * oneSecond + begin[1]);

            expect(nanoseconds).toBeLessThan(oneSecond);
        });

        it('Can Process Big Strings in under a second', () => {
            let randomString = '';
            const numberOfChars = 1000 * 100;
            for (let j = 0; j < numberOfChars; j += 1) {
                randomString += String.fromCharCode(Math.random() * (127 - 33) + 33);
            }

            const begin = process.hrtime();
            letters.findMissingLetters(randomString);
            const end = process.hrtime();
            const nanoseconds = (end[0] * oneSecond + end[1]) - (begin[0] * oneSecond + begin[1]);

            expect(nanoseconds).toBeLessThan(oneSecond);
        });
    });
});
