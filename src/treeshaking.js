// 这个函数没有被其他地方引用过
export function square (x) {
  return x * x
}
export function square2 (x) {
  let a = '1111111111'
  return a
}

// 这个函数被引用了
export function cube (x) {
  return x * x * x
}
