// given an aray with ['a1', 'a2', .....'aN', 'b1', 'b2', ....'bN', 'c1', 'c2', .....'cN'],
// stagger the subarrays so it becomes ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', ...'aN', 'bN', 'cN']
// 1. do it the bruteforce way with no constraints
// 2. do it in linear time with linear space
// 3. do it in linear time with constant space

/* Brute-Force O(nlog(n)) with constant space */
const organize = arr => arr.sort((a, b) => Number(a[1]) - Number(b[1]));

/* Linear-Time with O(n) space */
const organize2 = arr => {
  const n = arr.length;
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

/* Linear-Time with constant space */
//1. Loop through array (sans first and last entries)
//2. If the current entry isn't correct,
//3. Find the correct entry's index
//4. Swap the current entry with the correct entry 
//5. Rinse and Repeat
const organize3 = arr => {
  const n = arr.length / 3;

  const identifyCorrectEntry = i => {
    const letters = ['a','b','c'];
    let correctLetter;
    if (i % 3 === 0) {
      correctLetter = 'a';
    } else if ((i - 1) % 3 === 0) {
      correctLetter = 'b';
    } else {
      correctLetter = 'c';
    }
    return correctLetter + Math.ceil((i + 1) / 3);
  };
  
  const findCorrectIdx = (currIdx, correctEntry) => {
    while (currIdx < arr.length - 1) {
      if (arr[currIdx] === correctEntry) {
        return currIdx;
      }
      currIdx++;
    }
  };

  const swap = (incorrectIdx, correctIdx) => {
    [arr[correctIdx], arr[incorrectIdx]] = [arr[incorrectIdx], arr[correctIdx]];
  };

  //main function body
  for (var i = 1; i < arr.length - 1; i++) {
    let correctEntry = identifyCorrectEntry(i);
    if (arr[i] !== correctEntry) {
      let correctIdx = findCorrectIdx(i, correctEntry);
      swap(i, correctIdx);
    }
  }
  
  return arr;
};
