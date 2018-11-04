const letters = {};

const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

letters.findMissingLetters = (text) => {
    const missingLetters = [];
    for (let i = 0; i < 26; i += 1) {
        if (!text.includes(ALPHABET[i]) && !text.includes(UPPER_ALPHABET[i])) {
            missingLetters.push(ALPHABET[i]);
        }
    }
    return missingLetters.join('');
};

};
module.exports = letters;
