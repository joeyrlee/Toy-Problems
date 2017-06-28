const pieces = [1,2,5,10,20,50,100,200];

/* Brute-force solution */
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
