import {describe, expect, test} from "@jest/globals";

describe('map 함수 기본', () => {
  test('주어진 배열에 대해서 각 원소에 +1을 한 새로운 배열 객체를 반환한다.' ,() => {
    expect(map([1, 2, 3], (v) => v + 1).toEqual([2, 3, 4]))
  })
})