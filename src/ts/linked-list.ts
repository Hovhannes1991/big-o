// import { render } from "./helper";

export class LinkedListNode {
  value: any;
  next: null | LinkedListNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: null | LinkedListNode;
  tail: null | LinkedListNode;
  length: number;
  constructor(value: any) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return false;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let tmpTail = this.head;
      while (tmpTail.next && tmpTail.next.next) {
        tmpTail = tmpTail.next;
      }
      tmpTail.next = null;
      this.tail = tmpTail;
      this.length--;
    }
    return this;
  }

  unshift(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return false;
    let tmp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return tmp;
  }

  get(index: number): undefined | LinkedListNode {
    if (index < 0 || index >= this.length) return undefined;

    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  set(index: number, value: any) {
    const tmp = this.get(index);
    if (!tmp) return false;
    tmp.value = value;
    return true;
  }

  insert(value: any, index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new LinkedListNode(value);
    let tmp = this.get(index - 1);
    newNode.next = tmp.next;
    tmp.next = newNode;
    this.length++;
    return this;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let tmp = this.get(index - 1);
    tmp.next = tmp.next.next;
    this.length--;
    return this;
  }

  reverse() {
    for (let x = 0; x < this.length; x++) {
      let tmp = this.shift();
     
      if (tmp && tmp.value) {        
        this.insert(tmp.value, this.length-x);
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

let ll = new LinkedList(8);
// ll.push(9).push(55).push(87);
// ll.insert(888, 2);
// ll.shift()
console.log(...ll);

ll.reverse()
console.log(...ll);
console.log(ll);
