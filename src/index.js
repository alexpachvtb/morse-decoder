const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '',
        morse = '',
        letter = '';
    for (let i = 0; i < expr.length; i += 10) {
        morse = '';
        letter = expr.substr(i, 10);
        for (let i = 0; i < letter.length; i += 2) {
            if (letter[i] + letter[i + 1] == '10') {
                morse += '.';
            }
            if (letter[i] + letter[i + 1] == '11') {
                morse += '-';
            } 
        }
        if (morse == '') {
            str += ' ';
        } else {
            str += MORSE_TABLE[morse];
        }
    }
    return str;
}

module.exports = {
    decode
}