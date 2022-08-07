class StackItem {
  value: any;
  next: null | StackItem;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: null | StackItem;
  length: number;
  constructor(value: any) {
    const newItem = new StackItem(value);
    this.top = newItem;
    this.length = 1;
  }

  push(value: any) {
    const newItem = new StackItem(value);
    if (this.length === 0) this.top = newItem;
    else {
      newItem.next = this.top;
      this.top = newItem;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    let tmp = this.top;
    this.top = this.top.next;
    this.length--;
    tmp = tmp.value
    return tmp;
  }
}

const stack = new Stack(888);

console.log(stack);
stack.push(777);
stack.push(85);
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
