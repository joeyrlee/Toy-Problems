/* Greedy algorithm with O(n) time and O(1) space */
const findMaxProfit = stocks => {
  //throw error if too few stock prices
  if (stocks.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  //we'll greedily update minPrice and maxProfit, so we initialize
  //them to the first price and the first possible profit
  let minPrice = stocks[0];
  let maxProfit = stocks[1] - stocks[0];
  //start at the second (index 1) time
  //we can't sell at the first time, since we must buy first,
  //and we can't buy and sell at the same time!
  //if we started at index 0, we'd try to buy *and* sell at time 0.
  //this would give a profit of 0, which is a problem if our
  //maxProfit is supposed to be *negative*--we'd return 0!
  for (let i = 1; i < stocks.length; i++) {
    //see what our profit would be if we bought at the
    //min price and sold at the current price
    let potentialProfit = stocks[i] - minPrice;
    //update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    //update minPrice so it's always
    //the lowest price we've seen so far
    minPrice = Math.min(minPrice, stocks[i]);
  }
  return maxProfit;
};

console.log(findMaxProfit([10, 7, 5, 8, 11, 9]) === 6); // 11 - 5 = 6
console.log(findMaxProfit([10, 4, 5, 8, 11, 9]) === 7); // 11 - 4 = 7
console.log(findMaxProfit([10, 9, 8, 7, 6, 5]) === -1); // 9 - 10 = -1
console.log(findMaxProfit([5, 18, 4, 18, 0, 3]) === 14); // 18 - 4 = 14
