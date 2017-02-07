/**
 * Created by oregami on 17/2/7.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return lrcompare(root.left, root.right);

};

var lrcompare = function(left, right) {
    if (!left && !right) {return true}
    else if(!left || !right) {
        return false;
    }

    if (left.val !== right.val) return false;

    return lrcompare(left.left, right.right) && lrcompare(left.right, right.left);
}