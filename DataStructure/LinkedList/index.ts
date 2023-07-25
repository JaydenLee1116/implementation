/*
배열의 단점을 해결하기 위해서는 어떻게 해야할까?
- 저장하려는 데이터들을 분산해서 저장하고 각 데이터를 이어준다.

연결리스트
- 첫 노드의 주소만 알면 모든 노드에 접근할 수 있다.
- 초기 크기를 알아야할 필요가 없다.
- 데이터를 추가하거나 삭제할 때 다른 데이터들을 이동할 필요가 없다.
- 데이터를 읽어올 때는 처음부터 순서대로 읽어와야 한다.
- 데이터를 참조할 때는 O(n)이다.
- 데이터를 삽입, 삭제할 때도 O(n)이다.
 */

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
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index: number, data: T) {
    if (index > this.count || index < 0) {
      throw new Error("insert하기 위한 index값이 범위에서 벗어납니다.");
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
    this.count++;
  }

  insertLast(data: T) {
    this.insertAt(this.count, data);
  }

  deleteAt(index: number) {
    if (index >= this.count || index < 0) {
      throw new Error("delete하기 위한 index값이 범위에서 벗어납니다.");
    }

    if (index === 0) {
      const deletedNode = this.head;
      this.head = this.head!.next;
      this.count--;
      return deletedNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode && currentNode.next) {
        const deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.count--;
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
