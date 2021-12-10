// first k high frequency numbers

// [1, 1, 2, 1, 3, 4, 4, 5, 3, 3, 3, 6, 5]

const frequency = (nums, k) => {
    const hashMap = new Map;
    let highest = 0;
    const arr = [];
    // for(let key in nums) {
    //     hashMap.set(nums[key], hashMap.get(nums[key])+1 || 1) ;
    //     // hashMap[nums[key]] = hashMap[nums[key]]+1 || 1
    // }
    nums.map((n) => {
        return hashMap.set(n, hashMap.get(n) + 1 || 1);
    })
    console.log(hashMap);
    let list = [...hashMap.entries()].sort((a,b)=> b[1]-a[1]);
    for (let i =0;i<k ;i++) {
        arr.push(list[i][0]) 
    }
    console.log(arr);
    //console.log(maxRepNum);
}
//n+(kn) = n+nSq
frequency([1, 1, 2, 1, 3, 4, 4, 5, 3, 3, 3, 6, 5], 4);