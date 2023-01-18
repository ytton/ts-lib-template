import { describe, expect, it } from 'vitest'
import { add } from '../src/index'
describe('add function', () => {
  it('type is number add', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
