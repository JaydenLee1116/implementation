import map from "./index";

describe('map 함수 숫자 배열', () => {
  test('주어진 배열 [1, 2, 3]에 대해서 각 원소에 +1을 한 새로운 배열 [2, 3, 4] 객체를 반환한다.' ,() => {
    expect(map([1, 2, 3], (v) => v + 1)).toEqual([2, 3, 4]);
  });
})

describe('map 함수 문자 배열', () => {
  test("주어진 배열 ['jayden', 'sori', 'hodu']에 대해서 각 원소의 앞에 'hi, '를 더한 새로운 배열 ['hi, jayden', 'hi, sori', 'hi, hodu'] 객체를 반환한다." ,() => {
    expect(map(['jayden', 'sori', 'hodu'], (v) => `hi, ${v}`)).toEqual(['hi, jayden', 'hi, sori', 'hi, hodu']);
  });
})


describe('map 함수 숫자에서 문자 배열', () => {
  test("주어진 배열 [1, 2, 3]에 대해서 각 원소를 문자열로 바꾼 ['1', '2', '3'] 객체를 반환한다." ,() => {
    expect(map([1, 2, 3], (v) => `${v}`)).toEqual(['1', '2', '3']);
  });
})