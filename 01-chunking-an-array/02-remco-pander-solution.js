// Solution submitted by Remco Pander

function chunkedArray(input, chunkSize) {
  return input.reduce((accumulator, current) => {
    if (
      accumulator.length === 0 ||
      accumulator[accumulator.length - 1].length >= chunkSize
    )
      return [...accumulator, [current]];

    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);
}
