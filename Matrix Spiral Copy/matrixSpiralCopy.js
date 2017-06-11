var inputMatrix = [ [1,    2,   3,  4,    5],
                    [6,    7,   8,  9,   10],
                    [11,  12,  13,  14,  15],
                    [16,  17,  18,  19,  20] ];

var output = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12];

var matrixSpiralCopy = function(matrix) {
  var results = [];
  var leftCol = 0;
  var rightCol = matrix[0].length - 1;
  var topRow = 0;
  var btmRow = matrix.length - 1;
  while (rightCol >= leftCol && btmRow >= topRow) {
    //for vals in topRow from leftCol to rightCol; counter = leftCol
    for (let i = leftCol; i <= rightCol; i++) {
      //push vals to results
      results.push(matrix[topRow][i]);
    }
    //increment topRow
    topRow++;
    //for vals in topRow from btmRow; counter = topRow
    for (let i = topRow; i <= btmRow; i++) {
      //push vals to results
      results.push(matrix[i][rightCol]);
    }
    //decrement rightCol
    rightCol--;
    //for vals in topRow from leftCol to rightCol; counter -= rightCol
    for (let i = rightCol; i >= leftCol; i--) {
      //push vals to results
      results.push(matrix[btmRow][i]);
    }
    //decrement btmRow
    btmRow--;
    //for vals in topRow from leftCol to rightCol; counter -= btmRow
    for (let i = btmRow; i >= topRow; i--) {
      //push vals to results
      results.push(matrix[i][leftCol]);
    }
    //increment leftCol
    leftCol++;
  }
  return results;
};

console.log(JSON.stringify(matrixSpiralCopy(inputMatrix)) === JSON.stringify(output));
