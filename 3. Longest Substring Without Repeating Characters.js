/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (!s) {
        return 0;
    }

    var hmap = {};
    var max = 0;
    for (var scan=0, dup = 0, len = s.length; scan < len; scan++) {
        var char = s.charAt(scan);
        if (hmap[char] == scan) {
            dup = Math.max(dup, hmap[char] + 1);
        }
        hmap[char] = scan;
        max = Math.max(max, scan - dup + 1 );
    }

    return max;
};