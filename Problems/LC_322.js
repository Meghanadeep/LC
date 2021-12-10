// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


var coinChange = function(coins, amount) {
    const dpMinCoins = new Array(amount+1).fill(Infinity);
    dpMinCoins[0] = 0;
    for (let i = 1;i<dpMinCoins.length;i++) {
        for(let j =0;j<coins.length;j++) {
            const coinValue = coins[j];
            if(coinValue <= i) {
                dpMinCoins[i] = Math.min(dpMinCoins[i-coinValue]+1,dpMinCoins[i]); 
            } 
        }
    }
    let answer = dpMinCoins[dpMinCoins.length - 1];
    return answer === Infinity ? -1 : answer;
};

console.log(coinChange([1,2,5],11));

