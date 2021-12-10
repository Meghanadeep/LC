// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"


var longestPalindrome = function(s) {
    let maxLength = 0;
    let startIndex = 0;
    // if(s.length <= 1) {
    //     return s;
    // } else if(s.length === 2) {
    //     if(s[0] === s[1]) return s;
    //     else return s[0];
    // }
    const expandAroundMiddle = (left, right) => {
        while(left>=0 && right<s.length && s[left] === s[right]){
            const currentPalLength = (right - left) + 1;
            if(currentPalLength > maxLength) {
                maxLength = currentPalLength;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for(let i = 0; i< s.length;i++) {
        expandAroundMiddle(i-1,i+1);
        expandAroundMiddle(i,i+1);
    }
    console.log(startIndex,maxLength);
    const ans = s.slice(startIndex,startIndex + maxLength);
    return (startIndex === 0 && maxLength === 0) ? s[0] : ans;
    
};

console.log(longestPalindrome("ab"))
