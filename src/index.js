exports.min = function min(array) {
  if (array === undefined || !array.length) {
    return 0;
  }

  return Math.min(...array);
};

exports.max = function max(array) {
  if (array === undefined || !array.length) {
    return 0;
  }

  return Math.max(...array);
};

exports.avg = function avg(array) {
  if (array === undefined || !array.length) {
    return 0;
  }

  const result = array.reduce((acc, item) => {
    const res = acc + item;
    return res;
  }, 0);
  return result / array.length;
};
