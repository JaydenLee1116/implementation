import { HashTable } from '.';

describe('set(key, value)을 통해 해시함수를 거쳐 데이터를 추가할 수 있다.', () => {
  const hashFunction = (key: number) => key % 10;
  const hash = new HashTable<number, string>(hashFunction);
  it('set(1, "제이든")을 하면 1번 인덱스 배열에 {key: 1, value: "제이든"} 형태의 데이터가 저장된다.', () => {
    hash.set(1, '제이든');
    expect(hash.arr[1].getNodeAt(0)?.data.value).toEqual('제이든');
  });
  it('get(1)을 하면 key값이 1인 데이터를 읽어올 수 있다.', () => {
    expect(hash.get(1)).toEqual('제이든');
  });
  it('remove(1)을 하면 key값이 1인 데이터를 삭제할 수 있다.', () => {
    hash.remove(1);
    expect(hash.get(1)).toEqual(null);
  });
});
