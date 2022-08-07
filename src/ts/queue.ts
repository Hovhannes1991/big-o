class QueueItem {
  value: any;
  next: null | QueueItem;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: null | QueueItem;
  last: null | QueueItem;
  length: number;
  constructor(value: any) {
    const newItem = new QueueItem(value);
    this.first = newItem;
    this.last = newItem;
    this.length = 1;
  }

  enqueue(value: any) {
    const newItem = new QueueItem(value);
    if (this.length === 0) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.length) return undefined;
    let tmp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;      
    }
    tmp = tmp.value;
    this.length--;
    return tmp;
  }
}

const queue = new Queue(888);
queue.enqueue(87)
queue.enqueue(50)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)
