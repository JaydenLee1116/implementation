/*
덱(Deque)은 head와 tail 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조이다.

printAll(): 모든 데이터 출력
addFirst(): head에 데이터 삽입
removeFirst(): head의 데이터 삭제
addLast(): tail에 데이터 삽입
removeLast(): tail의 데이터 삭제
isEmpty(): 덱이 비어있는지 확인
*/

import { DoublyLinkedList } from '../DoublyLinkedList';

class Deque<T> {
  list: DoublyLinkedList<T>;
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data: T) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    this.list.deleteAt(0);
  }

  addLast(data: T) {
    this.list.insertLast(data);
  }

  removeLast() {
    this.list.deleteLast();
  }
}

export { Deque };
