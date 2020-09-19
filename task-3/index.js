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
      const searchTree = (node) => {
        if (index < node.index) {
          if (!node.left) {
            node.left = new Node(index, value);
          } else {
            searchTree(node.left);
          }
        } else if (index > node.index) {
          if (!node.right) {
            node.right = new Node(index, value);
          } else {
            searchTree(node.right);
          }
        }
      };
      searchTree(this.root);
    }
    return this;
  }
  findMin(index) {
    var node = this._search(index);
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  search(index) {
    let currentNode = this.root;
    while (currentNode) {
      if (index === currentNode.index) {
        return currentNode.value;
      }

      if (index < currentNode.index) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  _search(index) {
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
  contains(index) {
    let currentNode = this.root;
    while (currentNode) {
      if (index === currentNode.index) {
        return true;
      }

      if (index < currentNode.index) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  delete(key) {
    const removeNode = (node, key) => {
      if (node === null) {
        return null;
      } else if (key < node.index) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.index) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        } else {
          let inter = this.findMin(node.right.index);
          node.index = inter.index;
          node.value = inter.value;
          node.right = removeNode(node.right, inter.index);
          return node;
        }
      }
    };
    this.root = removeNode(this.root, key);
    return this;
  }

  traverse(order) {
    if (order) {
      let result = [];
      const transverse = (node) => {
        if (node.left) {
          transverse(node.left);
        }
        result.push(node.value);
        if (node.right) {
          transverse(node.right);
        }
      };
      transverse(this.root);
      return result;
    } else {
      let result = [];
      const transverse = (node) => {
        if (node.right) {
          transverse(node.right);
        }
        result.push(node.value);
        if (node.left) {
          transverse(node.left);
        }
      };
      transverse(this.root);
      return result;
    }
  }

  bfs(start) {
    let result = [];
    let queue = [];
    let currentNode = start ? this.search(start) : this.root;

    queue.push(currentNode);
    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.index);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
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
console.log(bst.contains(12));
console.log(bst.search(42));
console.log(bst._root());
bst.delete(10).delete(5);
console.log(bst);
console.log(bst.traverse(true));
console.log(bst.traverse(false));
