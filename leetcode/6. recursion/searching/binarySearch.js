// Condition => array should be sorted
// [1, 2, 3, 4, 5, 6], 5

// two pointer
const binarySearch = (arr, target) => {

  let left = 0, right = arr.length - 1;
  

  while(left < right){

    const mid = Math.floor((right + left) / 2);
    const midEle = arr[mid];

    if(midEle === target){
      return mid;
    }
    else if(target < midEle){
      right = midEle - 1;
    }
    else{
      left = midEle + 1;
    }
  }

  return -1;

}

// Time: O(log(n))
// Space: O(1)

// recurssive
const binarySearchRec = (arr, target, start = 0, end = arr.length - 1) => {
    
  if(start <= end){

    const mid = Math.floor((start + end) / 2);
    const midEle = arr[mid];

    if(midEle === target){
      return mid;
    }
    else if(target < midEle){
      return binarySearchRec(arr, target, start, mid - 1);
    }
    else{
      return binarySearchRec(arr, target, mid + 1, end);
    }
  }
  
  return -1;
}

console.log(binarySearchRec([1, 2, 3, 4, 5, 6], 3));