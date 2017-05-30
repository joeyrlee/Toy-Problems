/* Your inputs are configured thusly:
myRectangle = {
  btmX = 0,
  btmY = 0,
  width = 10,
  height = 5
}
*/


/*
All possible cases (see drawing for a visual): 
0. no overlap
1. complete overlap of both rectangles
2. complete immersion of one rectangle
3. middle total pass-through
4. partial pass-through
5. corner overlap
6. alternative corner overlap
7. middle total pass-through
8. weird different dimensions case
*/

const copyObj = (obj1, obj2) => {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

//use spaces for github inspection by anthony
const rectangularLove = (obj1, obj2) => {
  var newRectangle = {};
  //swap so that obj1.btmX is always <= obj2.btmX
  //AND if one rectangle is smaller, it's also obj1
  if (obj2.btmX < obj1.btmX || 
  	  obj2.btmX === obj1.btmX && obj2.btmY < obj1.btmY ||
  	  obj2.btmX === obj1.btmX && obj2.btmY === obj1.btmY && 
  	  obj2.width <= obj1.width && obj2.height <= obj1.height) {
    [obj1, obj2] = [obj2, obj1];
  }
  //no overlap (case 0)
  if (obj1.btmX + obj1.width <= obj2.btmX ||
      obj1.btmY + obj1.height <= obj2.btmY ||
      obj2.btmY + obj2.height <= obj1.btmY) {
    return null;
  }
  //complete overlap (case 1)
  if (obj1.btmX === obj2.btmX &&
      obj1.btmY === obj2.btmY &&
      obj1.width === obj2.width &&
      obj1.height === obj2.height) {
    return copyObj(newRectangle, obj1);
  }
  //complete immersion (case 2)
  if (obj1.btmX === obj2.btmX && obj1.btmY === obj2.btmY) {
  	if (obj1.height < obj2.height && obj1.width < obj2.width) {
  		return copyObj(newRectangle, obj1);
  	}
  } else if (obj2.btmX + obj2.width < obj1.btmX + obj1.width &&
  	         obj2.btmY + obj2.height < obj1.btmY + obj1.height) {
  	return copyObj(newRectangle, obj2);
  }
  //middle total pass-through (case 3)
  if (obj1.btmX < obj2.btmX && obj1.btmX + obj1.width > obj2.btmX + obj2.width &&
      obj2.btmY + obj2.height > obj1.btmY + obj1.height) {
    newRectangle.btmX = obj2.btmX;
    newRectangle.btmY = obj1.btmY;
    newRectangle.width = obj2.width;
    newRectangle.height = obj1.height;
    return newRectangle;
  }
  //partial pass-through (case 4)
  // if (left middle overlap of obj1) {
    //only width requires math: obj1.btmX + width - (obj2.btmX - obj1.btmX)
  // } else if (right middle overlap of obj2) {
    //only width requires math: obj2.btmX - obj1.btmX
  // } else if (top middle overlap of obj2) {
    //only height requires math: difference of obj1.btmX + height - obj2.btmY
  // } else if (bottom middle overlap of obj2) {
    //only height requires math: difference of obj1.btmX + height - obj2.btmY + height
  // }
  //corner overlap (case 6)
    //new btmX is obj1 btmX + width - obj2 btmX - obj1 btmX

    //new btmY is obj1 btmY + height - obj2 btmY

    //newRect width is 

    //newRect height is 
  return newRectangle;
};


/* Unit Tests */
const assertEquals = (expected, actual, test) => {
  expected === actual
    ? console.log('test passed')
    : console.log('test failed: \n' + test);
};

const assertObjectsEqual = (expected, actual, test) => {
  if (typeof expected !== 'object' || typeof actual !== 'object') {
    console.log('test failed: \n' + test);
    return; //EJECT
  }
  for (let key in expected) {
    if (expected[key] !== actual[key]) {
      console.log('test failed: \n' + test);
      return; //EJECT
    }
  }
  if (Object.keys(expected).length === Object.keys(actual).length) {
    console.log('test passed');
  } else {
    console.log('test failed: \n' + test)
  }
};

const test1 = [
  null, 
  rectangularLove(
    {
      btmX: 0,
      btmY: 0,
      width: 10,
      height: 5
    }, 
    {
      btmX: 10,
      btmY: 0,
      width: 10,
      height: 5
    }
  ), 
  "1. it should identify when there's no overlap"
];
assertEquals(...test1);

const test2 = [
  {
    btmX: 10,
    btmY: 0,
    width: 10,
    height: 5
  }, 
  rectangularLove(
    {
      btmX: 10,
      btmY: 0,
      width: 10,
      height: 5
    }, 
    {
      btmX: 10,
      btmY: 0,
      width: 10,
      height: 5
    }
  ), 
  "2. it should identify when there's complete overlap"
];
assertObjectsEqual(...test2);

const test3 = [
  {
    btmX: 1,
    btmY: 1,
    width: 8,
    height: 3
  }, 
  rectangularLove(
    {
      btmX: 0,
      btmY: 0,
      width: 10,
      height: 5
    }, 
    {
      btmX: 1,
      btmY: 1,
      width: 8,
      height: 3
    }
  ), 
  "3. it should identify complete immersion of one rectangle (different from overlap)"
];
assertObjectsEqual(...test3);

const test4 = [
  {
    btmX: 0,
    btmY: 0,
    width: 3,
    height: 5
  }, 
  rectangularLove(
    {
      btmX: 0,
      btmY: 0,
      width: 5,
      height: 10
    }, 
    {
      btmX: 0,
      btmY: 0,
      width: 3,
      height: 5
    }
  ), 
  "4. it should identify complete immersion with shared btmX/btmY axes"
];
assertObjectsEqual(...test4);

const test5 = [
  {
    btmX: 2,
    btmY: 2,
    width: 6,
    height: 5
  }, 
  rectangularLove(
    {
      btmX: 0,
      btmY: 2,
      width: 10,
      height: 5
    }, 
    {
      btmX: 2,
      btmY: 0,
      width: 6,
      height: 10
    }
  ), 
  "5. it should identify complete horizontal and vertical passthrough of one rectangle within another"
];
assertObjectsEqual(...test5);

const test6 = [
  {
    btmX: 7,
    btmY: 2,
    width: 3,
    height: 5
  }, 
  rectangularLove(
    {
      btmX: 0,
      btmY: 2,
      width: 10,
      height: 5
    }, 
    {
      btmX: 7,
      btmY: 0,
      width: 6,
      height: 10
    }
  ), 
  "6. it should identify partial horizontal pass-throughs"
];
assertObjectsEqual(...test6);

const test7 = [
  {
    btmX: 2,
    btmY: 2,
    width: 2,
    height: 2
  }, 
  rectangularLove(
    {
      btmX: 0,
      btmY: 0,
      width: 6,
      height: 5
    }, 
    {
      btmX: 2,
      btmY: 3,
      width: 2,
      height: 5
    }
  ), 
  "7. it should identify partial vertical pass-throughs"
];
assertObjectsEqual(...test7);
