class TreeNode {
  data;
  left;
  right;

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root;
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (this.root === null) {
      this.root = new TreeNode(data);
      return;
    }
    this.insertNode(this.root, data);
  }

  insertNode(node, data) {
    if (node.data < data) {
      if (node.right === null) {
        node.right = new TreeNode(data);
      } else {
        this.insertNode(node.right, data);
      }
    }
    if (node.data > data) {
      if (node.left === null) {
        node.left = new TreeNode(data);
      } else {
        this.insertNode(node.left, data);
      }
    }
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  findSum(node) {
    if (node === null) {
      return 0;
    }
    return node.data + this.findSum(node.left) + this.findSum(node.right);
  }
}

// Try
const binaryTree = new Tree();
binaryTree.insert(15);
binaryTree.insert(25);
binaryTree.insert(10);
binaryTree.insert(7);
binaryTree.insert(22);
binaryTree.postorder(binaryTree.root);
const sum = binaryTree.findSum(binaryTree.root);
console.log('sum');
console.log(sum);

let a = { s: 0, a: 1 };

const numericalValuesOfCharacters = new Object({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
});

for (let [v, k] of numericalValuesOfCharacters) {
}

let sas = 'selim';
sas.substring();
