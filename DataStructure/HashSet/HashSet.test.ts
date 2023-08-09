import { HashSet } from '.';
// add(data): 데이터 추가
// isContain(data): 데이터 포함 여부 확인
// remove(data): 데이터 삭제
// clear(): 데이터 전체 삭제
// isEmpty(): 데이터가 비어있는지 확인
// printAll(): 데이터 전체 출력
describe('add(data)을 통해 데이터를 추가할 수 있다.', () => {
  const set = new HashSet<number>();
  it('add(123)을 하면 3번 인덱스 배열에 {key: 123, value: true} 형태의 데이터가 저장된다.', () => {
    set.add(123);
    expect(set.isContain(123)).toEqual(true);
  });
});

describe('remove(data)을 통해 데이터를 제거할 수 있다.', () => {
  const set = new HashSet<number>();
  it('add(123) 후, remove(123)을 하면 데이터가 삭제된다.', () => {
    set.add(123);
    set.remove(123);
    expect(set.isContain(123)).toEqual(false);
  });
});

describe('printAll()을 통해 데이터를 콘솔로 확인할 수 있다.', () => {
  const set = new HashSet<number>();
  it('add(1), add(2), add(4) 후, printAll()을 하면 데이터가 출력된다.', () => {
    set.add(1);
    set.add(2);
    set.add(4);
    const logSpy = jest.spyOn(console, 'log');
    set.printAll();
    // NOTE: flat()하면 뒤에 있는 Circular로 찍히는 값이 왜 사라지지..?
    const logValues = logSpy.mock.calls.flat();
    expect(logSpy).toHaveBeenCalled();
    expect(logValues).toEqual([1, 2, 4]);
  });
});
