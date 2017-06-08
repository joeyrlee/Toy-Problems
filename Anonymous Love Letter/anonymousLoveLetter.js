//Inputs: str L for letter, N for newspaper
//Outputs: eval of if letter L can be written using the characters from N

/* Solution uses O(L + N) time complexity and O(L) space complexity */
const writeLetter = (L, N) => {
  const letterCount = new Map();
  //for each character in L
  for (let char of L) {
    //tabulate our letter counts needed
    letterCount.has(char)
      ? letterCount.set(char, letterCount.get(char) + 1)
      : letterCount.set(char, 1);
  }
  //for each character in N
  for (let char of N) {
    //decrement each character we encounter's value from letterCount
    if (letterCount.has(char) && letterCount.get(char) > 1) {
      letterCount.set(char, letterCount.get(char) - 1);
    //or delete the key altogether if there's only 1 left
    } else if (letterCount.has(char) && letterCount.get(char) <= 1) {
      letterCount.delete(char);
    }
    //answer is true if and when there are no keys left
    if (!letterCount.size) {
      return true;
    }
  }
  return false;
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
assertEqual(writeLetter('my letter', 'my letter'), true, 'should return true when exactly enough matching characters');

/* test 6 */
assertEqual(writeLetter('my letter', 'my letter my letter'), true, 'should return true when an excess of matching characters');
