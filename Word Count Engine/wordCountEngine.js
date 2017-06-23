//we could use Regex to quickly and declaratively
//strip non-letters from our string, but at the 
//cost of performance loss
const stripPunctuation = str => {
  return str.split('').reduce((acc, char) => {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
      return (acc + char).toLowerCase();
    }
    return acc;
  }, '');
};

const wordCountEngine = str => {

};
