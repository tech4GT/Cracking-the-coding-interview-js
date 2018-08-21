(function() {
    console.log(largestSubarraySum([2, 3, -8, -1, 2, 4, -2, 3]));
})();



function largestSubarraySum(arr) {

    let curSum = 0, maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (curSum + arr[i] < 0) curSum = 0;
        else {
            curSum += arr[i];
            if (maxSum < curSum) maxSum = curSum;
        }
    }
    return maxSum;
}