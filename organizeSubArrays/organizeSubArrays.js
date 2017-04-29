// given an aray with ['a1', 'a2', .....'aN', 'b1', 'b2', ....'bN', 'c1', 'c2', .....'cN'],
// stagger the subarrays so it becomes ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', ...'aN', 'bN', 'cN']
// 1. do it the bruteforce way with no constraints
// 2. do it in linear time with linear space
// 3. do it in linear time with constant space

/* Brute-Force O(nlog(n)) with constant space */
const organize = arr => arr.sort((a, b) => Number(a[1]) - Number(b[1]));

/* Linear-Time with O(n) space */
const organize2 = arr => {
  const alphabet = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4,
    'e': 5, 'f': 6, 'g': 7, 'h': 8,
    'i': 9, 'j': 10, 'k': 11, 'l': 12,
    'm': 13, 'n': 14, 'o': 15, 'p': 16,
    'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24,
    'y': 25, 'z': 26
  };
  const results = [],
        n = arr[arr.length - 1][1],
        letterCount = alphabet[arr[arr.length - 1][0]] - 1;
  for (let i = 0; i < n; i++) {
    results.push(arr[i]);
    results.push(arr[i + n]);
    results.push(arr[i + n * letterCount]);
  }
  return results;
};