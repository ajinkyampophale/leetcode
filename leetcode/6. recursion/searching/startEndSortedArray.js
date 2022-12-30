// [1, 2, 2, 3, 3, 3, 5], 3 => [3, 5]
// [1, 2, 3, 4, 5, 6], 4 => [3, 3]
// [], 1 => -1

const binarySearchLinear = (arr, target, start = 0, end = arr.length - 1) => {

  while(start <= end){

    const mid = Math.floor((start + end) / 2);
    const midEle = arr[mid];

    if(midEle === target){

      let left = mid - 1;
      let right = mid + 1;

      while(arr[left] && arr[left] === midEle){
        left--;
      }

      while(arr[right] && arr[right] === midEle){
        right++;
      }

      return [left + 1, right - 1];
    }
    else if(target < midEle){
      return binarySearch(arr, target, start, mid- 1);
    }
    else{
      return binarySearch(arr, target, mid + 1, end);
    }
  }
  
  return -1;
}

console.log(binarySearchLinear([1, 2, 2, 3, 3, 3, 5], 3));


const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {

  while(start <= end){

    const mid = Math.floor((start + end) / 2);
    const midEle = arr[mid];

    if(midEle === target){
      return mid;
    }
    else if(target < midEle){
      return binarySearch(arr, target, start, mid- 1);
    }
    else{
      return binarySearch(arr, target, mid + 1, end);
    }
  }
  
  return -1;
}

const searchRange = (arr, target) => {

  // get mid
  let firstPos = binarySearch(arr, target);
  if(firstPos === -1) return [-1, -1];

  let startPos = firstPos,
    endPos = firstPos,
    temp1, temp2;

  // iterate left
  while(startPos !== -1){
    temp1 = startPos;
    startPos = binarySearch(arr, target, 0, startPos - 1);
  }

  // iterate right
  while(endPos !== -1){
    temp2 = endPos;
    endPos = binarySearch(arr, target, endPos + 1, arr.length - 1);
  }

  // combine ans
  return [temp1, temp2];
}

console.log(searchRange([1, 2, 2, 3, 3, 3, 5], 3));

// Time: O(log(n))
// Space: O(1)