/**
 * Created by 怀 on 2015/10/13.
 */
module.exports = myMap;

function myMap(arr, func, scope) {
  var ret = [];
  for(var index = 0; index < arr.length; ++index) {
    var value = arr[index];
    ret.push(func.call(scope, value, index, arr));
  }
  return ret;
}
