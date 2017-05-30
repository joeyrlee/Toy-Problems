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
3. middle no-corner sectional overlap
4. corner overlap
5. alternative corner overlap
6. middle total pass-through
7. weird different dimensions case
*/

//use spaces for github inspection by anthony
const copyObj = (obj1, obj2) => {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

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
  //middle no-corner sectional overlap (case 3)

  //corner overlap (case 4)
    //new btmX is obj1 btmX + width - obj2 btmX - obj1 btmX

    //new btmY is obj1 btmY + height - obj2 btmY

    //newRect width is 

    //newRect height is 

  //middle total pass-through (case 6)


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


