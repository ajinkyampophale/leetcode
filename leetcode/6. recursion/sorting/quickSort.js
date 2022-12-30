const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// eg:
// [3, 2, 9, 4, 1, 7]
// [3, 2, 4, 9, 1, 7]
// [3, 2, 4, 1, 9, 7]

// [3, 2, 4, 1, 7, 9]

// [1, 2, 4, 3, 7, 9]
// [1, 2, 3, 4, 7, 9]

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

console.log(quickSort([3, 2, 9, 4, 1, 7]));

// Time: O(nlogn)
// Space: O(logn)