/**
 * Created by 怀 on 2015/10/14.
 */
module.exports = mySort;

function mySort(arr) {
  buildMaxHeap();
  for(var index = arr.length - 1; index > 0; --index) {
    swap(0, index);
    heapAdjust(0, index);
  }
  return arr;
  function buildMaxHeap() {
    for(var i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
      heapAdjust(i, arr.length);
    }
  }
  function heapAdjust(i, j) {
    var largest = i;
    var left = 2 * i + 1, right = 2 * i + 2;
    if(left < j && arr[largest] < arr[left]) {
      largest = left;
    }
    if(right < j && arr[largest] < arr[right]) {
      largest = right;
    }
    if(largest != i) {
      swap(i, largest);
      heapAdjust(largest, j);
    }
  }
  function swap(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
