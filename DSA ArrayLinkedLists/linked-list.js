/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      const newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
      if (!this.head) {
          throw new Error("Can't pop from an empty list");
      }
      let current = this.head;
      let previous = null;
      while (current.next) {
          previous = current;
          current = current.next;
      }
      const tailValue = current.val;
        if (previous) {
            previous.next = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return tailValue;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error('List is empty');
  }
  const headValue = this.head.val;
  this.head = this.head.next;
  if (!this.head) {
      this.tail = null;
  }
  this.length--;
  return headValue;
}

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
  }
  let current = this.head;
  for (let i = 0; i < idx; i++) {
      current = current.next;
  }
  return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
  }
  let current = this.head;
  for (let i = 0; i < idx; i++) {
      current = current.next;
  }
  current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Invalid index');
    }
  if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
          current = current.next;
      }
      const newNode = new Node(val, current.next);
      current.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
  if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
          previous = current;
          current = current.next;
      }
      previous.next = current.next;
      this.length--;
      return current.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
  let sum = 0;
  let current = this.head;
  while (current) {
      sum += current.val;
      current = current.next;
    }
  return sum / this.length;
  }
  }


module.exports = LinkedList;
