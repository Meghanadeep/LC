// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.



var isPalindrome = function(s) {
    const  santisedStr = s.toLowerCase().replace(/[\W_]/g, "");
    let left = 0;
    let right = santisedStr.length > 0 ? santisedStr.length - 1 : 0 ;
     while(left < right) {
        if(santisedStr[left] !== santisedStr[right]) {
           return false
        } else {
            left++;
            right--;
        }
     }
     return true;

};

console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplagfhjhgfgnacanalpanama"));
console.log(isPalindrome("aa"));