
exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0
  }
  let smallest = array[0]
  for (i = 1; i <= array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i]
    }
  }
  return smallest
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0
  }
  let biggest = array[0]
  for (i = 1; i <= array.length; i++) {
    if (array[i] > biggest) {
      biggest = array[i]
    }
  }
  return biggest
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0
  }
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length
}