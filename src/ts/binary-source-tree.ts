export class BinaryTreeItem {
  value: any;
  count: number;
  left: null | BinaryTreeItem;
  right: null | BinaryTreeItem;
  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

export class BinarySourceTree {
  root: null | BinaryTreeItem;
  constructor() {
    this.root = null;
  }

  insert(value: any) {
    const newItem = new BinaryTreeItem(value);
    if (!this.root) {
      this.root = newItem;
      return this;
    } else {
      let tmp = this.root;
      while (true) {
        if (newItem.value === tmp.value) {
          tmp.count++;
          return this;
        }
        if (newItem.value < tmp.value) {
          if (!tmp.left) {
            tmp.left = newItem;
            return this;
          }
          tmp = tmp.left;
        } else {
          if (!tmp.right) {
            tmp.right = newItem;
            return this;
          }
          tmp = tmp.right;
        }
      }
    }
  }

  contains(value: any) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode: BinaryTreeItem) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

const bt = new BinarySourceTree();
bt.insert(8).insert(88).insert(9)
console.log(bt.contains(9));
