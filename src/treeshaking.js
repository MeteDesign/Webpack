// 这个函数没有被其他地方引用过
export function square (x) {
  return x * x
}

// 这个函数被引用了
export function cube (x) {
  return x * x * x
}
