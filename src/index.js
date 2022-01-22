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
	 ' ': ' ',
};

function decode(expr) {
	 let res = "";
	 let array = [];
	 for (let i = 0; i < expr.length; i += 10) {
		 if (expr.slice(i, i + 10) === "**********") {
			 array.push(" ");
		 } else array.push(expr.slice(i, i + 10));
	 }
	 for (let i in array) {
		 let str = array[i];
		 let arrayRes = [];
			 for (let j = 0; j < str.length; j += 2) {
				 if (str === " ") {
					 arrayRes.push(" ");
					 break;
				 }
				 if (str[j] != 0) {
					 arrayRes.push(str.slice(j, j + 2) === "10" ? "." : "-");
				 }
			 }
			 res += MORSE_TABLE[arrayRes.join("")];
	 }
	 return res;
}

module.exports = {
    decode
}