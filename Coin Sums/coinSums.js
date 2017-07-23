const pieces = [1,2,5,10,20,50,100,200];

/* Brute-force solution with time O(p^n) where p is the number of pieces and n is the amount of money change is being made for */
const coinSumsBF = target => {
  let total = 0;
  (function recursePieces(currTotal) {
    currTotal = currTotal || 0;
    if (currTotal === target) {
      total++;
      return; //EJECT
    }
    for (let piece of pieces) {
      if (currTotal + piece <= target) {
        recursePieces(currTotal + piece);
      }
    }
  })();
  return total;
};

/* Time-efficient O(pn) dynamic programming solution */
const memoize = func => {
  const cache = {};
  return function() {
    let ser = JSON.stringify(arguments);
    return ser[cache] = ser[cache] || func.apply(this, arguments);
  };
};

const pieces = [1,2,5,10,20,50,100,200];

const makeChange = memoize((total, last) => {
  //base case
  if (total === 0) { return 1; }
  
  //recursive case
  last = last || total;
  let result = 0;
  pieces.filter(piece => piece <= total && piece <= last)
        .forEach(piece => result += makeChange(total - piece, piece));
  return result;
});
