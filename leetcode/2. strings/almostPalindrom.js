const convertStr = (str) => {
	return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

const validSubPalindrome = (str, p1, p2) => {
  
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

const isAlmostPalindrome = (str) => {

	str = convertStr(str);
  let p1 = 0;
  let p2 = str.length - 1;

	while(p1 < p2){
		
		if(str[p1] !== str[p2]){
      return validSubPalindrome(str, p1 + 1, p2) || validSubPalindrome(str, p1, p2 - 1);
		}
		else{
			p1++;
			p2--;
		}
	}
	
	return true;
}

// Time: O(n)
// Space: O(1)