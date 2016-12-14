/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode('head');
    var current =  new ListNode('temp');
    var addFlag = false;
    while (l1 || l2 || addFlag) {
        var v1 = l1 ? l1.val : 0;
        var v2 = l2 ? l2.val : 0;
        var sum = addFlag ? v1 + v2 + 1 : v1 + v2;
        addFlag = !!(sum >= 10);
        var v = sum % 10;
        var node = new ListNode(v);
        if (!result.next){
            result.next = node;
        }
        if (!current.next) {
            current.next = node;
            current = current.next;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;

};