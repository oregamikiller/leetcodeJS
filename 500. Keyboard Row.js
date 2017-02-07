/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var result = [];
    for (var word in words) {
        var pos = undefined;
        var flag = false;
        words[word].toLocaleLowerCase().split('').forEach(function(i,e){
            if (pos === undefined)
            {
                pos = getRowIndex(i);
            } else {
                if(pos !== getRowIndex(i)){
                    flag = true;
                    return false;
                }
            }
        });
        if (!flag) {
            result.push(words[word]);
        }
    }
    return result;
};

var getRowIndex = function(char) {
    var row0 = 'qwertyuiop';
    var row1 = 'asdfghjkl';
    var row2 = 'zxcvbnm';
    if(row0.indexOf(char) !== -1) {
        return 0;
    }
    if (row1.indexOf(char) !== -1) {
        return 1;
    }

    if (row2.indexOf(char) !== -1) {
        return 2;
    }
}
