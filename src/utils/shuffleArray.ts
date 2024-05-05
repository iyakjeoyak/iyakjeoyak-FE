const shuffleArray = <T>(array: Array<T>) => {
  for (let idx = array.length - 1; idx > 0; idx--) {
    const randomidxdx = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[randomidxdx]] = [array[randomidxdx], array[idx]];
  }
  return array;
};

export default shuffleArray;