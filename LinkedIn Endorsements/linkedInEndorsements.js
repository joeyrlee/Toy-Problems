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
  const skills = {};
  //for endorsements
  for (let i = 0; i < endorsements.length; i++) {
    //if current endorsements skill exists
    if (skills.hasOwnProperty(endorsements[i].skill)) {
      //add endorsements.user to proper skills[endorsements[i]].user array
      skills[endorsements[i].skill].user.push(endorsements[i].user);
      //increment the skill's count by 1
      skills[endorsements[i].skill].count++;
    //else
    } else {
      //initialize endorsement with user: current user and count: 1
      skills[endorsements[i].skill] = {user: [endorsements[i].user], count: 1};
    }
    
  }
  
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
