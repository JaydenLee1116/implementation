/*
덱(Deque)은 head와 tail 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조이다.

printAll(): 모든 데이터 출력
addFirst(): head에 데이터 삽입
removeFirst(): head의 데이터 삭제
addLast(): tail에 데이터 삽입
removeLast(): tail의 데이터 삭제
isEmpty(): 덱이 비어있는지 확인
*/

import { Deque } from '.';

describe('Deque의 addFirst()를 사용하여 head에 데이터를 삽입할 수 있다.', () => {
  const deque = new Deque();
  it('0부터 4의 값을 차례로 삽입하면 [4, 3, 2, 1, 0]와 같은 구조가 된다.', () => {
    deque.addFirst(0);
    deque.addFirst(1);
    deque.addFirst(2);
    deque.addFirst(3);
    deque.addFirst(4);
    const logSpy = jest.spyOn(console, 'log');
    deque.printAll();
    const logValue = logSpy.mock.calls[0][0];
    expect(logSpy).toHaveBeenCalled();
    expect(logValue).toEqual([4, 3, 2, 1, 0]);
    logSpy.mockRestore();
  });
});

describe('Deque의 removeFirst()를 사용하여 head에서 데이터를 제거할 수 있다.', () => {
  const deque = new Deque();
  deque.addFirst(0);
  deque.addFirst(1);
  deque.addFirst(2);
  deque.addFirst(3);
  deque.addFirst(4);
  it('removeFirst()를 2번 호출하면 [2, 1, 0]과 같은 구조가 된다.', () => {
    deque.removeFirst();
    deque.removeFirst();
    const logSpy = jest.spyOn(console, 'log');
    deque.printAll();
    const logValue = logSpy.mock.calls[0][0];
    expect(logSpy).toHaveBeenCalled();
    expect(logValue).toEqual([2, 1, 0]);
    logSpy.mockRestore();
  });
});

describe('Deque의 addLast()를 사용하여 tail에 데이터를 삽입할 수 있다.', () => {
  const deque = new Deque();
  it('0부터 4의 값을 차례로 삽입하면 [0, 1, 2, 3, 4]와 같은 구조가 된다.', () => {
    deque.addLast(0);
    deque.addLast(1);
    deque.addLast(2);
    deque.addLast(3);
    deque.addLast(4);
    const logSpy = jest.spyOn(console, 'log');
    deque.printAll();
    const logValue = logSpy.mock.calls[0][0];
    expect(logSpy).toHaveBeenCalled();
    expect(logValue).toEqual([0, 1, 2, 3, 4]);
    logSpy.mockRestore();
  });
});

describe('Deque의 removeLast()를 사용하여 tail에서 데이터를 제거할 수 있다.', () => {
  const deque = new Deque();
  deque.addLast(0);
  deque.addLast(1);
  deque.addLast(2);
  deque.addLast(3);
  deque.addLast(4);
  it('removeLast()를 2번 호출하면 [0, 1, 2]과 같은 구조가 된다.', () => {
    deque.removeLast();
    deque.removeLast();
    const logSpy = jest.spyOn(console, 'log');
    deque.printAll();
    const logValue = logSpy.mock.calls[0][0];
    expect(logSpy).toHaveBeenCalled();
    expect(logValue).toEqual([0, 1, 2]);
    logSpy.mockRestore();
  });
});
