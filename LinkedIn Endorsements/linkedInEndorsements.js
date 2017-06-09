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

