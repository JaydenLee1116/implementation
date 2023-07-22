import { Node, LinkedList } from "./index";

describe("Node는 본인의 값인 data를 가질 수 있다.", () => {
  test("Node의 data는 5이다.", () => {
    const node = new Node(5);
    expect(node.data).toEqual(5);
  });
});

describe("Node는 그 다음 Node를 참조할 수 있다.", () => {
  test("Node의 data는 3이고 그 다음 Node의 data는 6이다.", () => {
    const nextNode = new Node(2);
    const currentNode = new Node(1, nextNode);
    if (currentNode.next) {
      expect(currentNode.next.data).toEqual(nextNode.data);
    }
  });
});

describe("LinkedList의 insertAt을 통해 데이터를 특정 index에 삽입할 수 있다.", () => {
  const list = new LinkedList();
  test("list의 0번째 값으로 3을 삽입할 수 있다.", () => {
    list.insertAt(0, 3);
    if (list.head) {
      expect(list.head.data).toEqual(3);
    }
  });
  // TODO: 객체 깊어질수록 지저분한 타입 가드 해결하기
  test("list의 1번째 값으로 5를 삽입할 수 있다.", () => {
    list.insertAt(1, 5);
    if (list.head && list.head.next) {
      expect(list.head.next.data).toEqual(5);
    }
  });
});

describe("LinkedList의 insertLast을 통해 데이터를 맨 마지막에 삽입할 수 있다.", () => {
  test("list의 마지막(0번째) 값으로 0을 삽입할 수 있다.", () => {
    const list = new LinkedList();
    list.insertLast(0);
    if (list.head) {
      expect(list.head.data).toEqual(0);
    }
  });
  // TODO: 객체 깊어질수록 지저분한 타입 가드 해결하기
  test("list의 마지막(1번째) 값으로 1을 삽입할 수 있다.", () => {
    const list = new LinkedList();
    list.insertLast(0);
    list.insertLast(1);
    if (list.head && list.head.next) {
      expect(list.head.next.data).toEqual(1);
    }
  });
});

describe("LinkedList의 deleteAt을 통해 데이터를 특정 index에서 제거할 수 있다.", () => {
  const list = new LinkedList();
  list.insertLast(0);
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(3);
  list.insertLast(4);

  test("list의 0번째 값을 제거하면 data 0의 값을 가진 Node가 반환된다..", () => {
    const deletedValue = list.deleteAt(0)!.data;
    expect(deletedValue).toEqual(0);
  });
  test("list의 2번째 값을 제거하면 data 3의 값을 가진 Node가 반환된다.", () => {
    const deletedValue = list.deleteAt(2)!.data;
    expect(deletedValue).toEqual(3);
  });
});

describe("LinkedList의 deleteLast를 통해 맨 마지막 데이터를 제거할 수 있다.", () => {
  const list = new LinkedList();
  list.insertLast(0);
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(3);
  list.insertLast(4);

  test("list의 마지막 값을 제거하면 data 4의 값을 가진 Node가 반환된다.", () => {
    const deletedNode = list.deleteLast();
    const tempNode = new Node(4);
    expect(deletedNode).toEqual(tempNode);
  });
});

describe("LinkedList의 getNodeAt를 통해 특정 index의 Node를 얻을 수 있다.", () => {
  const list = new LinkedList();
  list.insertLast(0);
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(3);
  list.insertLast(4);

  test("list의 마지막 값을 제거하면 data 4의 값을 가진 Node가 반환된다.", () => {
    const targetNode = list.getNodeAt(3);
    expect(targetNode).toEqual(list.head!.next!.next!.next); // FIXME: assertion 이게 맞아..? 고치는 방법 없을까?
  });
});

describe("LinkedList의 printAll을 통해 모든 node의 data 값을 출력해서 확인할 수 있다.", () => {
  test("list의 모든 값을 출력하면 [0, 1, 2, 3, 4]가 출력된다.", () => {
    const list = new LinkedList();
    list.insertAt(0, 0);
    list.insertAt(1, 1);
    list.insertAt(2, 2);
    list.insertAt(3, 3);
    list.insertAt(4, 4);
    const logSpy = jest.spyOn(console, "log");
    list.printAll();
    const logValue = logSpy.mock.calls[0][0];
    expect(logValue).toEqual([0, 1, 2, 3, 4]);
    // 다시 원래 console.log로 돌리기 위해서 호출해야 한다.(안하면 그 뒤에 또 spyOn으로 가져올 때, 그 전 test log가 남아있게 된다.)
    logSpy.mockRestore();
  });
});

describe("LinkedList의 clear를 통해 LinkedList의 모든 data를 지울 수 있다.", () => {
  test("list를 clear 후 값을 출력하면 []가 출력된다.", () => {
    const list = new LinkedList();
    list.insertAt(0, 0);
    list.insertAt(1, 1);
    list.insertAt(2, 2);
    list.insertAt(3, 3);
    list.insertAt(4, 4);
    list.clear();
    const logSpy = jest.spyOn(console, "log");
    list.printAll();
    const logValue = logSpy.mock.calls[0][0];
    expect(logValue).toEqual([]);
    logSpy.mockRestore();
  });
});
