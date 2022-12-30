const f = (n) => {
    
  if(n < 0) return 0;

  result = f(n - 1);
  
  result += n;
  
  return result;
}


console.log(f(4));



const f = (n, result) => {
  
  if(n < 0) return result;

  return f(n - 1, result + n);
  
  // return result;
}

f(3, 0)
|
f(2, 3)
|
f(1, 5)
|
f(0, 6)


const f = (n) => {
  
  let result = 0;

  const h = (n) => {
      
      if(n < 0) return 0;
      
      result += n;
  
      h(n - 1);
  }
  
  h(n);
  
  return result;
}


const f = (str, l = 0, r = str.length - 1) => {
  
  if(str[l] !== str[r]) return false;
  if(l <= r) return true;
  
  return f(str, l + 1, r - 1);
}

console.log(f("nitin"));