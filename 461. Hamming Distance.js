/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var temp = x ^ y;
    var result = 0;
    for(var i=0;i<32;i++){
        result += (temp >> i) & 1;
    }
    return result;
};