// Given
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Result
var expectedResult = [
  { skill: 'css', user: ['Bill', 'Sue'], count: 2 },
  { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
  { skill: 'html', user: ['Sue'], count: 1 }
];

//ex. skills object being constructed
// {
//   css: {
//     user: ['Bill'],
//     count: 1
//   }
// }

//I: array of endorsements by users
//O: array of endorsements by skills
//Time complexity of O(n) and space complexity of O(n)
const organizeEndorsements = endorsements => {
  //reduce endorsements to a dictionary of skills
  const skills = endorsements.reduce((acc, currEnd) => {
    //if current endorsements skill exists
    if (acc.hasOwnProperty(currEnd.skill)) {
      //add endorsements.user to proper acc[endorsements[i]].user array
      acc[currEnd.skill].user.push(currEnd.user);
      //increment the skill's count by 1
      acc[currEnd.skill].count++;
      return acc;
    }
    //else initialize endorsement with user: current user and count: 1
    acc[currEnd.skill] = {user: [currEnd.user], count: 1};
    return acc;
  }, {});
  
  const results = [];
  //for keys in skills
  for (let skill in skills) {
    //push into our resultsArray an object with format:
    results.push(
      //{ skill: key, user: skills[currKey].user, count: skills[currKey].count }
      {skill: skill, user: skills[skill].user, count: skills[skill].count}
    );
  }
  
  return results;
};

console.log(JSON.stringify(organizeEndorsements(endorsements)) === JSON.stringify(expectedResult));
