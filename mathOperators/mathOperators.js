/* Write Multiply, Divide, Modulo, and Power Functions Using Only Addition And Subtraction */

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
	} else if (a < b) {
		[a, b] = [b, a];
	}
	//accommodate two negative inputs
	if (a < 0) {
		a = -a, b = -b;
	}

	//base case
	if (b === 1) {
		return a;
	}
	//recursive case
	//accommodate b being negative
	return b < 0
		? -(a + multiply(a, -b - 1))
		: a + multiply(a, --b);
};

/* Multiply Tests */
assert(1, 0, multiply(0, 0));
assert(2, 0, multiply(1, 0));

assert(3, 0, multiply(0, '4'));
//NaN can't equal NaN so strings are compared instead
assert(4, 'NaN', multiply(1, '4').toString());

assert(5, 4, multiply(2, 2));
assert(6, 15, multiply(3, 5));

assert(7, -1, multiply(1, -1));
assert(8, -5, multiply(1, -5));
assert(9, 10, multiply(-2, -5));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

const divide = (a, b) => {
	if (a === 0) {
		return 0;
	} else if (b === 0) {
		return a < 0
		  ? -Infinity
		  : Infinity;
	}

	let isNegative = false;
	if (a < 0 && b > 0) {
		a = -a;
		isNegative = true;
	} else if (a > 0 && b < 0) {
		b = -b;
		isNegative = true;
	} else {
		a = Math.abs(a);
		b = Math.abs(b);
	}
	
  let result = 1 + divide(a - b, b);
	return isNegative ? -result : result;
};

/* Divide Tests */
assert(11, 0, divide(0, 1));

assert(12, Infinity, divide(1, 0));
assert(13, -Infinity, divide(-1, 0));

assert(14, 5, divide(5, 1));
assert(15, 5, divide(10, 2));

assert(16, -5, divide(-10, 2));
assert(17, -5, divide(10, -2));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

const modulo = (a, b) => {

};

/* Modulo Tests */
assert(21, 0, modulo(0, 5));
assert(22, 'NaN', modulo(5, 0).toString());

assert(23, 0, modulo(10, 5));
assert(24, 2, modulo(8, 3));

assert(25, 2, modulo(-6, 4));
assert(26, 2, modulo(5, -2));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// const power;

/* Power Tests */

