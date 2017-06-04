words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

const findRotationalPoint = words => {
  let lowerBound = 1;
  let upperBound = words.length - 1;
  while (lowerBound <= upperBound) {
    //3 points of contact: lowerBound, middle, and upperBound
    //this determines the direction of new guesses in our binary search
    let guess = Math.floor((lowerBound + upperBound) / 2);
    if (words[guess].toLowerCase() < words[guess - 1].toLowerCase()) {
      return guess;
    } else if (words[guess].toLowerCase() > words[upperBound].toLowerCase()) {
      lowerBound = guess + 1;
    } else {
      upperBound = guess - 1;
    }
  }
  return 0;
};

const assertEqual = (a, b) => a === b;

assertEqual(words(['a', 'b', 'c', 'd', 'e']), 0);
assertEqual(words(['e', 'a', 'b', 'c', 'd']), 1);
assertEqual(words(['d', 'e', 'a', 'b', 'c']), 2);
assertEqual(words(['c', 'd', 'e', 'a', 'b']), 3);
assertEqual(words(['b', 'c', 'd', 'e', 'a']), 4);
