
exports.min = function min (array) {
 if(Array.isArray(array) && array.length) {
  let result = array.sort( (a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a == b) return 0;
});
let res = result.splice(0, 1); 
return +res;
 } else {
   return 0;
 }
}


exports.max = function max (array) {
  if(Array.isArray(array) && array.length) {
  let result = array.sort( (a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a == b) return 0;
});
let res = result.pop(); 
return +res;
} else {
  return 0;
}
}

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length) {
  let result = array.reduce((sum, current) => sum + current, 0);
   return result/20;
} else {
  return 0;
}
}
