/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var temp;
    if (!root) return [];


    if (root.val && (root.left || root.right)) {
        temp = root.left
        root.left = root.right;
        root.right = temp
        invertTree(root.right);
        invertTree(root.left);
    }

    return root;
};