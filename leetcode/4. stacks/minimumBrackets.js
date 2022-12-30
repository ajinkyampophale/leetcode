// "a)bc(d)" => "abc(d)"
// "(ab(c)d" => "ab(c)d" or "(abc)d"
// "))((" => ""

// [ ")", "b", "c", "(", "d", ")"];


const minimumBrackets = (str) => {

  const stack = [];
  const arr = str.split("");

  for(let i = 0; i < arr.length; i++){
    const current = arr[i];

		if(current === "("){
			stack.push(i);
		}
		else if(current === ")"){
      if(stack.length === 0){
        arr[i] = "";
      }
      else{
        stack.pop();
      }
		}
  }

  // for(let i = 0; i < arr.length; i++){

  //   if(stack.includes(i)){
  //     arr[i] = "";
  //   }
  // }

  // OR

  while(stack.length){
    const idx = stack.pop();
    arr[idx] = "";
  }

  return arr.join("");
}

console.log(minimumBrackets("a)bc(d)"));
console.log(minimumBrackets("(ab(c)d"));
console.log(minimumBrackets("))(("));

// Time: O(n)
// Space: O(n)