const convertStr = (str) => {
	return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

const isPalindrome = (str) => {
	
	str = convertStr(str);
	let p1 = 0;
	let p2 = str.length - 1;

	while(p1 < p2){
		
		if(str[p1] !== str[p2]){
			return false;
		}
		else{
			p1++;
			p2--;
		}
	}
	
	return true;
}


console.log(isPalindrome("abcba"));
console.log(isPalindrome("abccba"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("abc"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));


const isEven = (num) => {
	return (num % 2 === 0) ? true : false;
}

const isPalindrome2 = (str) => {
	
	str = convertStr(str);
	const mid = Math.ceil(str.length / 2) - 1;
	let p1, p2;

	if(isEven(str.length)){
		p1 = mid;
	 	p2 = mid + 1;
	}
	else{
		p1 = mid;
	 	p2 = mid;
	}

	while(p1 >= 0 || p2 < str.length){
		
		if(str[p1] !== str[p2]){
			return false;
		}
		else{
			p1--;
			p2++;
		}
	}
	
	return true;
}

console.log(isPalindrome2("abcba"));
console.log(isPalindrome2("abccba"));
console.log(isPalindrome2(""));
console.log(isPalindrome2("a"));
console.log(isPalindrome2("abc"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));


const reverseStr = (str) => {
	let finalStr = "";

	for(let i = str.length - 1; i >= 0; i--){
		finalStr = finalStr + str[i];
	}

	return finalStr;
}

const isPalindrome3 = (str) => {
	
	str = convertStr(str);
	const reversedStr = reverseStr(str);

	return str === reversedStr;
}

console.log(isPalindrome3("abcba"));
console.log(isPalindrome3("abccba"));
console.log(isPalindrome3(""));
console.log(isPalindrome3("a"));
console.log(isPalindrome3("abc"));
console.log(isPalindrome3("A man, a plan, a canal: Panama"));