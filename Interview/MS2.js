var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    console.log(map);
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    console.log(sortedArray);
    return res;
};

console.log(topKFrequent([1,2,3,3,4,2,3,1,4], 3));