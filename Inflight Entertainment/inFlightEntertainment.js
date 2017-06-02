const areLengthOfFlightMovies = (l, m) => {
  const movieLengthsSeen = new Set();
  for (let i = 0; i < m.length; i++) {
    if (movieLengthsSeen.has(m[i])) {
      return true;
    } else {
      movieLengthsSeen.add(l - m[i]);
    }
  }
  return false;
};
