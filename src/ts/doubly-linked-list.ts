export class DoublyLLNode {
  value: any;
  next: null | DoublyLLNode;
  prev: null | DoublyLLNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoulbyLinkedList {
  head: null | DoublyLLNode;
  tail: null | DoublyLLNode;
  length: number;
  constructor(value: any) {
    const newNode = new DoublyLLNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: any) {
    const newNode = new DoublyLLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let tmpTail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      tmpTail.prev = null;
    }
    this.length--;
    return this;
  }

  unshift(value: any) {
    const newNode = new DoublyLLNode(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.length) return undefined;
    let tmp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      tmp.next = null;
    }
    this.length--;
    return tmp;
  }

  get(index: number): undefined | DoublyLLNode {    
    if (index < 0 || index >= this.length) return undefined;

    let tmp;
    if (index < this.length / 2) {      
      tmp = this.head;
      for (let i = 0; i < index; i++) {        
        tmp = tmp.next;
      }      
    } else {
      tmp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        tmp = tmp.prev;
      }      
    }
    return tmp;
  }

  set(index: number, value: any) {
    const tmp = this.get(index);
    if (!tmp) return false;
    tmp.value = value;
    return true;
  }

  insert(index: number, value: any) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new DoublyLLNode(value);
    let before = this.get(index - 1);
    let after = before.next;    
    newNode.prev = before;
    before.next = newNode;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return this;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    let tmp = this.get(index);
    let before = tmp.prev;
    let after = tmp.next;

    before.next = after;
    after.prev = before;
    tmp = null;
    this.length--;
    return this;
  }

  reverse() {
    for (let x = 0; x < this.length; x++) {
      let tmp = this.shift();

      if (tmp && tmp.value) {
        this.insert(tmp.value, this.length - x);
      }
    }
  }

  [Symbol.iterator] = function* () {
    let current = this.head;
    for (let x = 0; x < this.length; x++) {
      yield current.value;
      current = current.next;
    }
  };
}

let ll = new DoulbyLinkedList(8);
// ll.push(9).push(55).push(87);
// ll.insert(888, 2);
// ll.shift()
console.log(...ll);
ll.remove(0)
console.log(...ll);
console.log(ll);
