//we could use Regex to declaratively
//strip non-letters from our string, but at the 
//cost of potential performance loss
const stripPunctuation = str => {
  return str.split('').reduce((acc, char) => {
    if ('abcdefghijklmnopqrstuvwxyz '.includes(char.toLowerCase())) {
      return (acc + char).toLowerCase();
    }
    return acc;
  }, '');
};

const countWords = str => {
  let highestCount = 1;
  return [str.split(' ').reduce((acc, word) => {
    //keep track of the highest count for later
    if (acc[word] && acc[word] > highestCount) {
      highestCount = acc[word] + 1;
    }
    if (acc[word]) {
      acc[word] += 1;
      return acc;
    }
    acc[word] = 1;
    return acc;
  }, {}), highestCount];
};

//Solution counts and organizes words in
//descending order of occurrence in O(n) time and space
const wordCountEngine = str => {
  str = stripPunctuation(str);
  let [wordMap, highestCount] = countWords(str);

  //create an array of highest count + 1 empty buckets
  //we chain map to fill to prevent each bucket
  //pointing to the same exact bucket in memory
  let sortedBucket = new Array(highestCount+1).fill(0).map(val=>[]);
  //a simple variation of a bucket sort using
  //words' respective counts as bucket numbers/indices
  for (let word in wordMap) {
    let bucketNum = wordMap[word];
    sortedBucket[bucketNum].push(word);
  }

  return sortedBucket.reduce((acc, bucket, idx) => {
    if (bucket.length) {
      bucket.forEach(word => {
        acc.unshift([word, '' + idx]);
      });
    }
    return acc;
  }, []);
};

console.log(wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!"));
