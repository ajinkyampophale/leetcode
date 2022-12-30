const validParentheses = (str) => {

	if(str.length <= 1) return false;
	
	const brackets = {
		'{': '}',
		'[': ']',
		'(': ')',
		'<': '>'
	};

	const stack = [];

	for(let i = 0; i < str.length; i++){
		
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

console.log(validParentheses('{()[]}'));
console.log(validParentheses('{{[()]}}'));
console.log(validParentheses('{()[}'));
console.log(validParentheses('{()[}]'));
console.log(validParentheses(''));

// Time: O(n)
// Space: O(n)