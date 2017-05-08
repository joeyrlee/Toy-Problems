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
	} else if (typeof a !== 'number' || typeof b !== 'number') {
		return NaN;
	} else if (b > a) {
		[a, b] = [b, a];
	}

	const multiplyByLooping = (a, b) => {
		let result = a;
		while (b !== 1) {
			result += a;
			b--;
		}
		return result;
	};

	//if a < 0, then both numbers are negative
	if (a < 0) {
		return multiplyByLooping(-a, -b);
	//else if just b is negative
	} else if (b < 0) {
		return -multiplyByLooping(a, -b);
	}
	//else both numbers are positive
	return multiplyByLooping(a, b);
};

/* Multiply Tests */
assert(1, 0, multiply(0, 0));
assert(2, 0, multiply(1, 0));

assert(3, 0, multiply(0, '4'));
assert(4, 'NaN', multiply(1, '4').toString());

assert(5, 4, multiply(2, 2));
assert(6, 15, multiply(3, 5));

assert(7, -1, multiply(1, -1));
assert(8, -5, multiply(1, -5));
assert(9, 10, multiply(-2, -5));

// const divide;

/* Divide Tests */


// const modulo;

/* Modulo Tests */


// const power;

/* Power Tests */
