// Implemented using quick select algo
// sortingPivot logic remains same only function calling logic changes
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const sortingPivot = (arr, start, end) => {

  let pivot = arr[end];
  let swapIdx = start;

  for(let i = start; i < end; i++){

    if(arr[i] < pivot){
      // swap
      swap(arr, swapIdx, i);  
      swapIdx++;           
    }
  }

  swap(arr, end, swapIdx);
  return swapIdx;
}

const quickSelect = (arr, indexToFind, start = 0, end = arr.length - 1) => {

  if(start < end){
    const swapIdx = sortingPivot(arr, start, end);

    // ignore the partition which doesn't have that element
    if(indexToFind === swapIdx){
      return arr;
    }
    else if(indexToFind < swapIdx){
      return quickSelect(arr, indexToFind, start, swapIdx - 1);
    }
    else{
      return quickSelect(arr, indexToFind, swapIdx + 1, end);
    }
  }

  return arr;
}

const getKLargestElement = (arr, k) => {

  const indexToFind = arr.length - k;
  quickSelect(arr, indexToFind);
  return arr[indexToFind];
}

console.log(getKLargestElement([3, 2, 9, 4, 1, 7], 2));

// Time: Worst: O(n^2)
//       Best: O(n)
// Space: O(1)