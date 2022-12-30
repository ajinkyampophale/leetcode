const convertStrings = (str) => {
	const arr = [];

	for(let i = 0; i < str.length; i++){
		if(str[i] === "#"){
			arr.pop();
		}
		else{
			arr.push(str[i]);
		}
	}

	return arr;
}

const typesOutStrings = (str1, str2) => {
	
	const arr1 = convertStrings(str1);
	const arr2 = convertStrings(str2);

	if(arr1.length !== arr2.length) return false;

	for(let i = 0; i < arr1.length; i++){
		if(arr1[i] !== arr2[i]) return false;
	}
	
	return true;
}

console.log(typesOutStrings("ab#c", "az#c"));
console.log(typesOutStrings("", ""));
console.log(typesOutStrings("ab#c", "abb#c"));
console.log(typesOutStrings("ab##c", "abb#c"));
console.log(typesOutStrings("a###c", "abb#c"));

// Timt: O(n + m)
// Space: O(n + m)


const typesOutStringsOptimal = (str1, str2) => {

	let p1 = str1.length - 1;
	let p2 = str2.length - 1;
	let str1Hash = 0;
	let str2Hash = 0;

	while(p1 >= 0 && p2 >= 0){

		if(str1[p1] === "#" || str2[p2] === "#"){

			if(str1[p1] === "#"){
				p1--;
				str1Hash++;
			}

			if(str2[p2] === "#"){
				p2--;
				str2Hash++;
			}
		}
		else if(str1Hash > 0 || str2Hash > 0){

			if(str1Hash > 0){
				p1--;
				str1Hash--;
			}

			if(str2Hash){
				p2--;
				str2Hash--;
			}
		}
		else{
			if(str1[p1] !== str2[p2]){
				return false;
			}
			else{
				p1--;
				p2--;
			}
		}
	}

	return true;
}

console.log(typesOutStringsOptimal("ab#c", "az#c"));
console.log(typesOutStringsOptimal("", ""));
console.log(typesOutStringsOptimal("ab#c", "abb#c"));
console.log(typesOutStringsOptimal("ab##c", "abb#c"));
console.log(typesOutStringsOptimal("a###c", "abb#c"));

// Time: O(n + m)
// Space: O(1)