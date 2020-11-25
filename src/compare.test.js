import {describe, test, expect} from '@jest/globals'

import compare from './compare'

describe("compare", () => {
  test("compare all zeros", () => {
    const result = compare([0,0,0,0])
    expect(result).toEqual([0,0,0,0])
  })

  test("compare with 2,0,0,0", ()=>{
    const result = compare([2,0,0,0])
    console.log(result)
    expect(result).toEqual([0,0,0,2])
  })

  test("compare with 2,2,0,0", () => {
    const result = compare([2,2,0,0])
    expect(result).toEqual([0,0,0,4])
  })

  test("compare with 2,2,4,0", () => {
    const result = compare([2,2,4,0])
    expect(result).toEqual([0,0,4,4])
  })
});
