const validParanthesis = (s) => {
  const pairHashMap = {'{': '}', '[' : ']', '(' : ')'};
  const stack = [];
  for(let i =0;i<s.length;i++) {
      console.log(s[i]);
      if(pairHashMap[s[i]]) {
          stack.push(s[i])
          console.log(stack)
      } 
    else if(pairHashMap[stack.pop()] !== s[i]) {
        return false;
    }
  }

   return (stack.length === 0); 

}

console.log(validParanthesis("[[[]]]"))