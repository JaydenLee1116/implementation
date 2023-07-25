import { Stack } from "./index";

/*
스택: LIFO(Last In First Out) 구조

push(): 데이터 삽입
pop(): 데이터 제거
peek(): 데이터 참조
isEmpty(): 스택이 비어있는지 확인
 */

describe("Stack의 push()를 사용하면 데이터를 삽입할 수 있다.", () => {
  const stack = new Stack();
  it("숫자 0을 push하면 현재 head의 값은 0이 된다.", () => {
    stack.push(0);
    expect(stack.peek()!.data).toEqual(0);
  });
  it("숫자 1를 push하면 현재 head의 값은 1이 된다.", () => {
    stack.push(1);
    expect(stack.peek()!.data).toEqual(1);
  });
});

describe("Stack의 pop()을 호출하면 데이터를 제거할 수 있다.", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  it("pop하면 반환하는 Node의 data 값은 2이다.", () => {
    const popNode = stack.pop();
    expect(popNode!.data).toEqual(2);
  });
  it("한번 더 pop하면 반환하는 Node의 data 값은 1이다.", () => {
    const popNode = stack.pop();
    expect(popNode!.data).toEqual(1);
  });
});

describe("Stack의 peek()을 호출하면 가장 최근 삽입한 데이터를 확인할 수 있다.", () => {
  const stack = new Stack();
  it("peek한 Node의 data 값은 4다.", () => {
    stack.push(4);
    expect(stack.peek()!.data).toEqual(4);
  });
  it("peek한 Node의 data 값은 8이다.", () => {
    stack.push(8);
    expect(stack.peek()!.data).toEqual(8);
  });
});

describe("Stack의 isEmpty()을 호출하면 비어있는지 유무를 확인할 수 있다.", () => {
  const stack = new Stack();
  it("isEmpty 호출 시, true가 반환된다.", () => {
    expect(stack.isEmpty()).toEqual(true);
  });
  it("isEmpty 호출 시, false가 반환된다.", () => {
    stack.push(0);
    expect(stack.isEmpty()).toEqual(false);
  });
  it("isEmpty 호출 시, true가 반환된다.", () => {
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
});
