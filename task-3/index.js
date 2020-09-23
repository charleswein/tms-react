class Node {
  constructor(index, value) {
    this.index = index;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  _root() {
    return this.root.value;
  }
  insert(index, value) {
    let newNode = new Node(index, value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root = this.insertNode(this.root, newNode);
    }
    return this;
  }
  insertNode(node, newNode) {
    if (newNode.index < node.index) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.index > node.index) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
    return node;
  }
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
  search(index) {
    let node = this.searchNode(index);
    return node.value;
  }
  searchNode(index) {
    let currentNode = this.root;
    while (currentNode) {
      if (index === currentNode.index) {
        return currentNode;
      }

      if (index < currentNode.index) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  preOrder(node, arr) {
    let result = arr;
    if (node.left) {
      this.preOrder(node.left, result);
    }
    result.push(node.value);
    if (node.right) {
      this.preOrder(node.right, result);
    }
    return result;
  }
  contains(value) {
    let arr = [];
    if (this.preOrder(this.root, arr).includes(value)) {
      return true;
    } else {
      return false;
    }
  }
  delete(key) {
    const removeNode = (node, key) => {
      let currentNode = node;
      if (!currentNode) {
        return null;
      } else if (key < currentNode.index) {
        currentNode.left = removeNode(currentNode.left, key);
        return currentNode;
      } else if (key > currentNode.index) {
        currentNode.right = removeNode(currentNode.right, key);
        return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          currentNode = null;
          return currentNode;
        }
        if (!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode;
        } else if (!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode;
        } else {
          let inter = this.findMin(currentNode.right);
          currentNode.index = inter.index;
          currentNode.value = inter.value;
          currentNode.right = removeNode(currentNode.right, inter.index);
          return currentNode;
        }
      }
    };
    this.root = removeNode(this.root, key);
    return this;
  }
  traverse(order) {
    let arr = [];
    if (order) {
      return this.preOrder(this.root, arr);
    } else {
      return this.preOrder(this.root, arr).reverse();
    }
  }
}
const bst = new BST();

bst
  .insert(14, "fourteen")
  .insert(5, "five")
  .insert(1, "one")
  .insert(42, "fourty two")
  .insert(25, "twenty five")
  .insert(2, "two")
  .insert(10, "ten")
  .insert(43, "fourty three")
  .insert(7, "seven")
  .insert(11, "eleven")
  .insert(13, "thirteen");

console.log(bst.contains("five"));
console.log(bst.search(42));
console.log(bst._root());
console.log(bst.delete(5).delete(42));
console.log(bst.traverse(true));
console.log(bst.traverse(false));