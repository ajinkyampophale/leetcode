// Implemented using quick sort
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

const quickSort = (arr, start = 0, end = arr.length - 1) => {

  if(start < end){
    const swapIdx = sortingPivot(arr, start, end);
    quickSort(arr, start, swapIdx - 1);
    quickSort(arr, swapIdx + 1, end);
  }

  return arr;
}

const getKLargestElement = (arr, k) => {

  const indexToFind = arr.length - k;
  quickSort(arr);
  return arr[indexToFind];
}

console.log(getKLargestElement([3, 2, 9, 4, 1, 7], 2));