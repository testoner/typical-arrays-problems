
exports.min = function min(array) {
  if (typeof (array) == "undefined") return 0;
  if (array.length == 0) return 0;
  let mi = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (mi > array[i]) {
      mi = array[i];
    }
  }
  return mi;
}

exports.max = function max(array) {
  if (typeof (array) == "undefined") return 0;
  if (array.length == 0) return 0;
  let ma = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (ma < array[i]) {
      ma = array[i];
    }
  }
  return ma;
}

exports.avg = function avg(array) {
  if (typeof (array) == "undefined") return 0;
  if (array.length == 0) return 0;
  let av = 0;
  let l = array.length;
  for (let i = 0; i < l; i++) {
    av += array[i];
  }
  av /= l;
  return av;
}
