/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var isFind = false;
    for(var i = 0, len = nums.length; i<len - 1; i++){
        if (isFind) break;
        for (var j = i + 1; j < len; j++){
            if (nums[i] + nums[j] === target ) {
                result.push(i);
                result.push(j);
                isFind = true;
                break;
            }
        }
    }
    if (result.length === 2) {
        return result;
    }
};