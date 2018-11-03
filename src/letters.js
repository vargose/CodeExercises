const letters = {};
letters.findMissingLetters = (text) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let missingLetters = '';
    for (let i = 0; i < alphabet.length; i += 1) {
        if (!text.includes(alphabet[i])) {
            missingLetters += alphabet[i];
        }
    }
    return missingLetters;
};
module.exports = letters;
