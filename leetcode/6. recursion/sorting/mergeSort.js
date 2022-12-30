const mergeSortedArray = (arr1, arr2) => {

  const sortedArr = [];
  let i = 0, j = 0;

  while(i < arr1.length && j < arr2.length){

    if(arr1[i] < arr2[j]){
      sortedArr.push(arr1[i]);
      i++;
    }
    else{
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length){
    sortedArr.push(arr1[i]);
    i++;
  }

  while(j < arr2.length){
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
}

const mergeSort = (arr) => {

  if(arr.length <= 1) return arr;

  // divide
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let merged = mergeSortedArray(left, right); 

  return merged;
}

console.log(mergeSort([3, 2, 9, 4, 1, 7]));