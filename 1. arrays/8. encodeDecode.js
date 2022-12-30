// https://www.lintcode.com/en/old/problem/encode-and-decode-strings/

const encode = (strs) => {
  if(!strs) return "";
  return strs.map(str => `${str.length}${str}`).join(''); // n + n
}

const decode = (str) => {

  if(!str) return [];

  const result = []; // n
  let i = 0;

  while(i < str.length){ // n

    let wordLength = parseInt(str[i]);  
    let start = i + 1;
    let end = start + wordLength;

    let word = str.slice(start, end); // 1

    i = end;
    result.push(word);
  }

  return result;
}

// const strs = ["lint","code","love","you"];
// const strs = ["we", "say", ":", "yes"];
// const strs = [];
// const strs = ["li8nt","c4ode","lov3e","you"];
// const strs = ["li8#nt","c4od@e","lov3e","you"];
const strs = ["li8#nt ","c4od @e","lov3e","you"];

const encodedValue = encode(strs);
console.log({encodedValue});
console.log(decode(encodedValue));

// Encode:
// Time: O(n)
// Space: O(1)

// Decode:
// Time: O(n)
// Space: O(n)