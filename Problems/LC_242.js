// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
    const sCharMap = {};
    if(s.length !== t.length) {
       return false;
    } else {
       for(key in s) {
         sCharMap[s[key]] = sCharMap[s[key]]+1 || 1;
       }
    }
    for(key in t) {
        if(!sCharMap[t[key]]) {
            return false;
        }else{
            sCharMap[t[key]]--
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));