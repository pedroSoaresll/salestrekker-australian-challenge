import { onlyNumbers } from './numbers'

describe('utils - numbers', () => {
  test('should return only number', () => {
    const result = onlyNumbers('hello-world123')
    expect(result).toStrictEqual('123')
  })
})
