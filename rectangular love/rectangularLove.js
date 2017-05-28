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
5. middle total pass-through
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
  //swap obj1 and obj2 if necessary so that
  //obj1.btmX is always less than obj2.btmX
  if (obj2.btmX < obj1.btmX) {
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
  if (
    obj1.btmX <= obj2.btmX && obj2.btmX + obj2.width <= obj1.btmX + obj1.width
    
  ) {

  }
  //middle no-corner sectional overlap (case 2)

  //corner overlap (case 3)
    //new btmX is obj1 btmX + width - obj2 btmX - obj1 btmX

    //new btmY is obj1 btmY + height - obj2 btmY

    //newRect width is 

    //newRect height is 

  //middle total pass-through (case 4)


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
  {}, 
  rectangularLove(
    {
      btmX: 10,
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
  "2. it should identify when there's complete immersion of one rectangle"
];
assertEquals(...test3);


