/* Randomly Re-Order an Array in O(n) Time and O(1) Space */
/* Given functions: floor = n => Math.floor(n) and rand = () => Math.random() */
const floor = n => Math.floor(n);
const rand = () => Math.random();
const arr = [1,2,3,4,5];
for (var i = arr.length - 1; i > 0; i--) {
  let randIdx = floor(rand() * (i + 1));
  [arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
}

//Also called the Fisher-Yates Shuffle / Knuth Shuffle