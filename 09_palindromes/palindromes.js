const palindromes = function (string) {
    const allowedChar = "abcdefghijklmnopqrstuvwxyz1234567890";
    const cleanedString = string.toLowerCase()
                                .split('')
                                .filter(string=>allowedChar.includes(string))
                                .join('');
    const reversedStr = cleanedString.split('')
                                    .reverse()
                                    .join('');
    return cleanedString===reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
