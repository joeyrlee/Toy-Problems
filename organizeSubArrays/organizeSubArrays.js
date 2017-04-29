// given an aray with ['a1', 'a2', .....'aN', 'b1', 'b2', ....'bN', 'c1', 'c2', .....'cN'],
// stagger the subarrays so it becomes ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', ...'aN', 'bN', 'cN']
// 1. do it the bruteforce way with no constraints
// 2. do it in linear time with linear space
// 3. do it in linear time with constant space

/* Brute-Force O(nlog(n)) with constant space */
const organize = arr => arr.sort((a, b) => Number(a[1]) - Number(b[1]));

/* Linear-Time with O(n) space */
const organize2 = arr => {
  const n = Number(arr[arr.length - 1][1]);
  let aStart = 0;
  let bStart = n;
  let cStart = n * 2;
  const results = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
      results.push(arr[aStart++]);
    } else if ((i - 1) % 3 === 0) {
      results.push(arr[bStart++]);
    } else {
      results.push(arr[cStart++]);
    }
  }
  return results;
};
