// https://leetcode.com/problems/valid-parentheses/

const isValid = (str) => {

	if(str.length <= 1) return false;
	
	const brackets = {
		'{': '}',
		'[': ']',
		'(': ')',
		'<': '>'
	};

	const stack = []; // n

	for(let i = 0; i < str.length; i++){ // n
		
		const current = str[i];

		if(brackets[current]){
			stack.push(current);
		}
		else{
			const lastEle = stack.pop();
			if(brackets[lastEle] !== current){
				return false;
			}
		}
	}

	return stack.length > 0 ? false : true;
}

// Time: O(n)
// Space: O(n)