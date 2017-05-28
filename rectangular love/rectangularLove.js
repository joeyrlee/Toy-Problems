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
1. complete immersion or overlap of rectangles
2. middle no-corner sectional overlap
3. corner overlap
4. middle total pass-through
*/

//use spaces for github inspection by anthony
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
  return expected === actual
    ? console.log('test passed')
    : console.log('test failed: \n' + test);
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




