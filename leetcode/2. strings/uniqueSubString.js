const uniqueSubString = (str) => {
	
	const visited = {};
	let maxSubStringCount = 0;
	let p1 = 0, p2 = 0;

	while(p2 < str.length){
	   
		if(visited[str[p2]] >= p1){
			p1 = visited[str[p2]] + 1;
		}

		visited[str[p2]] = p2;
    maxSubStringCount = Math.max(maxSubStringCount, p2 - p1 + 1);
		p2++;
	}

	return maxSubStringCount;
}

console.log(uniqueSubString("abccba"));
console.log(uniqueSubString(""));
console.log(uniqueSubString("abcbad"));
console.log(uniqueSubString("abcdab"));
console.log(uniqueSubString("abcdef"));
console.log(uniqueSubString("abcabcbb"));

// Time: O(n)
// Space: O(n)