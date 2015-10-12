/**
 * Created by 怀 on 2015/10/12.
 */
module.exports = binarySearch;
function binarySearch(arr, elem) {
  var left = 0, right = arr.length - 1, mid;
  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if(arr[mid] === elem) {
      return mid;
    } else if(arr[mid] > elem) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
  function search(arr, left, right) {
    if(left > right) {
      return -1;
    }
    var mid = Math.floor((left + right) / 2);
    if(arr[mid] == elem) {
      return mid;
    } else if(arr[mid] > elem) {
      return search(arr, left, mid - 1, elem);
    } else {
      return search(arr, mid + 1, right, elem);
    }
  }
}
