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
//aggregate the coin options for our current total
const takeWhile = function (arr, predicate) {
  let result = [];
  let i = 0;
  while (predicate(arr[i])) {
    result.push(arr[i++]);
  }
  return result;
};

//limit the selection of coin choices based on decrementing total
const possibleChoices = function (total, max) {
  return takeWhile(coins, function (coin) {
    return total >= coin && coin <= max;
  });
};

const memoize = function (func, context) {
  const cache = {};
  return function () {
    if (!(JSON.stringify(arguments) in cache)) {
      cache[JSON.stringify(arguments)] = func.apply(context, arguments);
    }
    return cache[JSON.stringify(arguments)];
  };
};
                                 
const makeChange = memoize(function (total, last) {
  last = last || total;
  //base case
  if (total === 0) {
    return 1;
  }
  //recursive case
  let result = 0;
  let choices = possibleChoices(total, last);
  for (let i = 0; i < choices.length; i++) {
    let coin = choices[i];
    result += makeChange(total - coin, coin);
  }
  return result;
});
