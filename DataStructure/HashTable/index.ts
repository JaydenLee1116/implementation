/*
해시테이블(Hash Table): 편하게 해시, 맵, 해시맵, 딕셔너리로도 불린다.
해시테이블은 키와 값으로 데이터를 저장하는 자료구조이다.
해시테이블은 키를 `해시함수`에 넣어서 나온 해시값을 인덱스로 사용하여 값을 저장하고, 값을 찾아올 수 있다.

만약 해시함수가 충돌이 일어난다면, 해시테이블은 충돌을 해결하기 위해 같은 해시값을 가진 데이터를 링크드 리스트로 연결한다.
그렇기 때문에 해시테이블의 성능은 해시함수의 성능에 크게 의존한다.(해시값 하나에 데이터가 많이 연결되면 결국 링크드 리스트가 되기 때문에)
장점: 빠른 데이터 읽기, 삽입, 삭제
단점: 해시함수의 성능에 크게 의존, 해시값 충돌이 일어나면 성능이 떨어짐, 메모리를 많이 사용

set(): 데이터 삽입
get(): 데이터 읽기
remove(): 데이터 삭제
*/

import { DoublyLinkedList } from '../DoublyLinkedList';

class HashData<T, P> {
  key: T;
  value: P;
  constructor(key: any, value: any) {
    this.key = key;
    this.value = value;
  }
}

class HashTable<T, P> {
  arr: DoublyLinkedList<HashData<T, P>>[];
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList<HashData<T, P>>();
    }
  }

  hashFunction(num: T) {
    if (typeof num !== 'number') throw new Error('number type only');
    return num % 10;
  }

  set(key: T, value: P) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key: T) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) return currentNode.data.value;
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(key: T) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
  }
}

export { HashTable };
