// brute force
const calculateRainWater = (edges) => {

	let totalArea = 0;

	for(let i = 0; i < edges.length; i++){
		
		let maxLeft = 0, maxRight = 0;
		let current = edges[i];

		// calculating max left
		for(let j = i - 1; j >= 0; j--){
			maxLeft = Math.max(edges[j], maxLeft);
		}
	
		// calculating max right
		for(let k = i + 1; k < edges.length; k++){
			maxRight = Math.max(edges[k], maxRight);
		}

		// comparing
		const individualArea = Math.min(maxLeft, maxRight) - current;
		if(individualArea > 0) totalArea += individualArea;
	}

	return totalArea;
}

console.log(calculateRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// Time: O(n^2)
// Space: O(1)


// optimal
const calculateRainWaterOptimal = (edges) => {

	let totalArea = 0;
  let p1 = 0;
  let p2 = edges.length - 1;
  let maxLeft = edges[p1];
  let maxRight = edges[p2];
  let current = edges[p1];
  
  while(p1 < p2){

    // check if there is wall on left side
    if(maxLeft > current){
      // update total
      totalArea += Math.min(maxLeft, maxRight) - current;
    }

    if(edges[p1] < edges[p2]){
      p1++;
      maxLeft = Math.max(maxLeft, edges[p1]);
      current = edges[p1]; 
    }
    else{
      p2--;
      maxRight = Math.max(maxRight, edges[p2]);
      current = edges[p2];
    }
  }

	return totalArea;
}

console.log(calculateRainWaterOptimal([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(calculateRainWaterOptimal([4, 2, 0, 3, 2, 5]));

// Time: O(n)
// Space: O(1)


// Same logic different implementation
const calculateRainWaterOptimal2 = (edges) => {

	let totalArea = 0;
  let p1 = 0;
  let p2 = edges.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  
  while(p1 < p2){

    // check if left values is less tha right value
    if(edges[p1] <= edges[p2]){

      // check if there is wall on left side
      if(edges[p1] >= maxLeft){
        maxLeft = edges[p1];
      }
      else{
        totalArea += maxLeft - edges[p1];
      }

      p1++;
    }
    else{

      if(edges[p2] >= maxRight){
        maxRight = edges[p2];
      }
      else{
        totalArea += maxRight - edges[p2];
      }

      p2--;
    }
    
  }

	return totalArea;
}

console.log(calculateRainWaterOptimal2([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(calculateRainWaterOptimal2([4, 2, 0, 3, 2, 5]));