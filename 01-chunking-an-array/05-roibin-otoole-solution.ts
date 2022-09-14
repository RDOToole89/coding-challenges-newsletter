// Solution submitted by Roibin O'Toole

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;

const chunkArrayLoop = (values: number[], chunkSize: number): number[][] => {
  // init an empty array
  const chunkedArray: number[][] = [];
  let index = 0;

  // slice the values array in chunks determined by the index and chunkSize
  // e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, 0 + 3) // [1, 2, 3]
  while (index < values.length) {
    // push slice into the chunkedArray
    chunkedArray.push(values.slice(index, index + chunkSize));
    // increase index by chunkSize
    index += chunkSize;
  }

  return chunkedArray;
};

console.log(chunkArrayLoop(values, chunkSize));

const chunkArrayWithReduce = (values: any[], chunkSize: number) =>
  values.reduce((acc: any[][], value: number, index: number) => {
    // if index % chunkSize has no remainder
    // push a new empty array in to the accumulator
    if (index % chunkSize === 0) {
      acc.push([]);
    }

    // otherwise grab the previously created array and push the value until
    // chunkSize % index equals 0 again
    acc[acc.length - 1].push(value);
    return acc;
  }, []);

console.log(chunkArrayWithReduce(values, chunkSize));
