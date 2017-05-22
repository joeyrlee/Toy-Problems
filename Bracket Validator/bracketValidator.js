const bracketValidator = str => {
	const bracketsSeen = [];
  const bracketMap = {
  	')': '(',
  	']': '[',
  	'}': '{'
  };
  for (let char of str) {
	  if (char === '(' || char === '[' || char === '{') {
	  	bracketsSeen.push(char);
	  } else if (char === ')' || char === ']' || char === '}') {
	  	if (bracketsSeen[bracketsSeen.length - 1] === bracketMap[char]) {
	  		bracketsSeen.pop();
	  	} else {
	  		return false;
	  	}
	  }
	}

  return !bracketsSeen.length;
};
