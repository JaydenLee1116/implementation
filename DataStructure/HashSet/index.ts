/*
셋(Set): 데이터의 중복을 허용하지 않는 자료구조
Set은 해쉬 테이블로 구현할 수 있다.(해쉬셋이라고 부르기도 한다.)
해쉬 테이블의 키로만 이루어진 데이터 구조이다.

add(data): 데이터 추가
isContain(data): 데이터 포함 여부 확인
remove(data): 데이터 삭제
clear(): 데이터 전체 삭제
isEmpty(): 데이터가 비어있는지 확인
printAll(): 데이터 전체 출력
*/

import { HashTable } from '../HashTable';

class HashSet<T> {
  hashTable: HashTable<T, boolean>;
  constructor() {
    const hashFunction = (key: T) => {
      if (typeof key === 'number') return key % 10;
      if (typeof key === 'string') {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
          sum += key.charCodeAt(i);
        }
        return sum % 10;
      }
      throw new Error('HashSet은 number, string 타입만 지원합니다.');
    };
    this.hashTable = new HashTable(hashFunction);
  }

  add(data: T) {
    if (this.hashTable.get(data) === null) {
      this.hashTable.set(data, true);
    }
  }

  isContain(data: T) {
    return this.hashTable.get(data) !== null;
  }

  remove(data: T) {
    this.hashTable.remove(data);
  }

  clear() {
    let length = this.hashTable.arr.length;
    for (let i = 0; i < length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    let length = this.hashTable.arr.length;
    for (let i = 0; i < length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }
    return empty;
  }

  printAll() {
    let length = this.hashTable.arr.length;
    for (let i = 0; i < length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
