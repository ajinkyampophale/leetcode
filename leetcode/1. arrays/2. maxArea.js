const maxArea = (verticalLines) => {
	let maxArea = 0;
	let i = 0;
	let j = verticalLines.length -1;


	while(i < j){
		
		const minLength = Math.min(verticalLines[i], verticalLines[j]);
		const area = minLength * (j -i);

		maxArea = Math.max(maxArea, area);

		if(verticalLines[i] < verticalLines[j]) i++;
		else j--;
	}

	return maxArea;
}

// Time: O(n)
// Space: O(1)