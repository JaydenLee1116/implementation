/*
  모든 데이터 출력 - printAll
  모든 데이터 제거 - clear
  인덱스 삽입 - insertAt(index, data)
  마지막 삽입 - insertLast(data)
  인덱스 삭제 - deleteAt(index)
  마지막 삭제 - deleteLast()
  인덱스 읽기 - getNodeAt(index)
 */

class Node<T> {
  data: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  constructor(
    data: T,
    next: Node<T> | null = null,
    prev: Node<T> | null = null,
  ) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  count: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertAt(index: number, data: T) {
    if (index > this.count || index < 0) {
      throw new Error("insert하기 위한 index값이 범위에서 벗어납니다.");
    }

    this.count++;
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next = newNode;
        newNode.next!.prev = newNode;
      }
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  insertLast(data: T) {
    this.insertAt(this.count, data);
  }

  deleteAt(index: number) {
    if (index >= this.count || index < 0) {
      throw new Error("delete하기 위한 index값이 범위에서 벗어납니다.");
    }

    this.count--;
    if (index === 0) {
      const deletedNode = this.head;
      if (this.head!.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head.prev = null;
      }
      return deletedNode;
    } else if (index === this.count - 1) {
      const deletedNode = this.tail;
      this.tail!.prev!.next = null;
      this.tail = this.tail!.prev;
      return deletedNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode) {
        const deletedNode = currentNode.next;
        currentNode.next = currentNode.next!.next;
        currentNode.next!.prev = currentNode;
        return deletedNode;
      }
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index: number) {
    if (index >= this.count || index < 0) {
      throw new Error("getNodeAt하기 위한 index값이 범위에서 벗어납니다.");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }
    return currentNode;
  }

  printAll() {
    let currentNode = this.head;
    const nodeData = [];
    while (currentNode) {
      nodeData.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(nodeData);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}

export { Node, LinkedList };
