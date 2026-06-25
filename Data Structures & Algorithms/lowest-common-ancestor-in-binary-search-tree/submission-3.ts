/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode,
        q: TreeNode
    ): TreeNode | null {
        if (!root) return null

        if (root.val < p.val && root.val < q.val) {
            return this.lowestCommonAncestor(root.right, p, q)
        }
        if (root.val > p.val && root.val > q.val) {
            return this.lowestCommonAncestor(root.left, p, q)
        }
        return root
    }
}
