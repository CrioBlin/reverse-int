module.exports = function reverse (n) {
  let arr = n.toString().split('');
  arr = arr.reverse().join('');
  arr = parseInt(arr);
  return arr;
}
