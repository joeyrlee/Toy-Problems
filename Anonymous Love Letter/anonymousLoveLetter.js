//Inputs: str L for letter, N for newspaper
//Outputs: eval of if letter L can be written using the characters from N

const writeLetter = (L, N) => {

};


const assertEqual = (actual, expected, test) => {
  if (actual === expected) {
    console.log('test passed');
  } else {
    console.log('test failed;', test);
  }
};

/* test 1 */
assertEqual(writeLetter('my letter', ''), false, 'should return false when insufficient characters in newspaper N');

/* test 2 */
assertEqual(writeLetter('my letter', 'myletter'), false, 'should count empty spaces as characters');

/* test 3 */
assertEqual(writeLetter('My letter', 'my letter'), false, 'should differentiate character-case');

/* test 4 */
assertEqual(writeLetter('My letter', 'my letr'), false, 'should return false when insufficient quantity of characters');

/* test 5 */
assertEqual(writeLetter('my letter', 'my letter'), false, 'should return true when exactly enough matching characters');

/* test 6 */
assertEqual(writeLetter('my letter', 'my letter my letter'), false, 'should return true when an excess of matching characters');
