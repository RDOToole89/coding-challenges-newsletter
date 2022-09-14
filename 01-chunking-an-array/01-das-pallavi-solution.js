// Solution submitted by Das Pallavi

const chunkedArray = (inputArray, chunkSize) => {
  let finalArr = [];
  let increment = chunkSize;

  for (let i = 0; i < inputArray.length; i++) {
    finalArr.push(inputArray.slice(i, chunkSize));
    i = chunkSize - 1;
    chunkSize += increment;
  }

  return finalArr;
};

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
