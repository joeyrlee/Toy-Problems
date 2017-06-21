let sampleValidTree = {
  value: 5,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: {
        value: 4,
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: {
        value: 8,
        left: null,
        right: null
      },
      right: {
        value: 10,
        left: null,
        right: null
      }
    }
  }
};

let sampleInvalidTree = {
  value: 5,
  left: {
    value: 4,
    left: null,
    right: {
      /* invalid placement relative tree root node */
      value: 6
    }
  },
  right: {
    value: 6,
    left: null,
    right: null
  }
}

const isBinarySearchTree = (treeRoot, lowerBound, upperBound) => {
  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound : Infinity;
  if (!treeRoot) { return true; }
  if (treeRoot.value > upperBound || treeRoot.value < lowerBound) {
    return false;
  }
  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
         isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}

console.log(isBinarySearchTree(sampleValidTree) === true);
console.log(isBinarySearchTree(sampleInvalidTree) === false);
