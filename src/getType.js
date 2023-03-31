/*
  ~@Description: 获取数据类型
  ~@MethodAuthor: 姬兵兵
  ~@Date: 2023-03-30 14:59:51
*/
const getType = (() => {
  const types = new Map([
    ['[object Undefined]', 'undefined'],
    ['[object Boolean]', 'boolean'],
    ['[object Number]', 'number'],
    ['[object BigInt]', 'bigint'],
    ['[object String]', 'string'],
    ['[object Function]', 'function'],
    ['[object RegExp]', 'regexp'],
    ['[object Array]', 'array'],
    ['[object Date]', 'date'],
    ['[object Error]', 'error'],
    ['[object Set]', 'set'],
    ['[object Map]', 'map'],
    ['[object WeakSet]', 'weakset'],
    ['[object WeakMap]', 'weakmap'],
  ])

  return (value) => {
    if (value === null) {
      return 'null'
    }
    const type = typeof value
    if (type !== 'object') {
      return type
    }
    return types.get(Object.prototype.toString.call(value)) || 'object'
  }
})()
export default getType
