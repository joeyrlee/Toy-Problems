/* Write Multiply, Divide, Modulo, and Power functions */

/* Assert function  */
const assert = (testNum, expected, actual) => {
	if (expected === actual) {
		console.log('Test',testNum,'Passed!');
	} else {
	  console.log('Test',testNum,'Failed!\n'+
								'expected result:',expected,'\n'+
								'Actual Result:',actual,'\n');
	}
};


const multiply = (a, b) => {
	if (a === 0 || b === 0) {
		return 0;
	}
};

/* Multiply Tests */
assert(1, 0, multiply(0, 0));
assert(2, 0, multiply(1, 0));
assert(3, 0, multiply(0, 1));

// const divide;

/* Divide Tests */


// const modulo;

/* Modulo Tests */


// const power;

/* Power Tests */
