const twoSums = (array, target) => {
	
	if(array.length <= 1) return null;

	for(let i = 0; i < array.length; i++){
		
		const remaining = target - array[i];

		for(let j = (i + 1); j < array.length; j++){
			
			if(remaining === array[j]){
				return [i, j];
				break;
			}
			
		}

	}

	return null;
}

// Time - O(n^2)
// Space - O(1)


const twoSumsOptimal = (array, target) => {
	
	if(array.length <= 1) return null;

	const remainingObj = {};

	for(let i = 0; i < array.length; i++){

		if(remainingObj[array[i]] >= 0){
			return [remainingObj[array[i]], i];
		}
		
		const remaining = target - array[i];
		remainingObj[remaining] = i;
	}

	return null;
}

// Time - O(n)
// Space - O(n)