/*
큐(Queue): FIFO(First In First Out) 구조로 먼저 들어온 데이터가 먼저 나가는 구조
ex) 마트 줄서기, 은행 창구, 운영체제가 프로세스를 관리할 때 프로세스의 실행 순서(FIFO 스케쥴링) 등
우리의 일상에서 질서를 유지하는 줄이 큐

단방향 연결리스트는 뒤의 데이터 제거가 쉽지 않다. 가장 뒤의 노드를 제거하기 위해서는 맨 앞부터 순회해야 하기 때문이다.(O(n))
따라서 성능을 위해서 tail을 추가하여 양방향 연결리스트로 구현한다. 그러면 O(1)의 시간복잡도로 뒤의 데이터를 제거할 수 있다.
그러나 tail이 삭제 후 이전 노드를 가리키도록 해야하는데, 결국엔 이 때도 O(n)의 시간복잡도가 소요된다.
따라서 이중 연결리스트를 사용하여 head와 tail을 모두 가리키도록 하여 O(1)의 시간복잡도로 뒤의 데이터를 제거할 수 있도록 한다.
현
enqueue(): 데이터 삽입
dequeue(): 데이터 제거
front(): 데이터(tail) 참조
isEmpty(): 큐가 비어있는지 확인
 */

import { DoublyLinkedList } from "../DoublyLinkedList";

class Queue<T> {
  list: DoublyLinkedList<T>;
  constructor() {
    this.list = new DoublyLinkedList<T>();
  }

  enqueue(data: T) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
