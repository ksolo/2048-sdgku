export default function compare(row) {
  const nonZeros = removeZeros(row)
  if (nonZeros.length) {
    nonZeros.forEach((num, index, coll) => {
      if (num === coll[index + 1]) {
        coll[index] = num * 2
        coll[index+1] = 0
      }
    })
    return fillWithZeros(removeZeros(nonZeros))
  }
  return row;
}

function removeZeros(row) {
  return row.filter((item) => item != 0);
}

function fillWithZeros(row) {
  while (row.length < 4) {
    row.unshift(0)
  }
  return row
}
