//solution 1
let s = "[]"
function isValid(s){
    stack = [];
    let parens = ["() {} []"];
    let i = 0;
    while(i<s.length){
        stack.push(s[i]);
        i++

        let  open = stack[stack.length-2];
        let  close = stack[stack.length-1];
        let proParens = open+close;
        if(parens.includes(proParens)){
            stack.pop();
            stack.pop();           
        }

    }
    return stack.length === 0;
};
console.log(isValid(s))

// solution No.2
s = "[)"
let isValid = function(s){
    const hashmap = {"(":")","[":"]","{":"}"};
    const stack = [];
    for(ch of s){
        if(hashmap[ch]){
            stack.push(hashmap[ch]);
        }
        else if(stack.length>0 && stack[stack.length-1]===ch){
            stack.pop()
        }
        else{
            return false
        }
    }
    return stack.length === 0

}
console.log(isValid(s));