type s = string // 把類型取別的名字
let str2: s = '123'

// 常用於聯合類型起別名
type all = string | number | boolean
let num5: all = 123
let bool: all = true

// type 跟 interface 最大的差別是 interface 可以擴充
type card = {
  title: string,
  desc: string,
}

// 會報錯
// type card = {
//   age: number
// }

interface card2 {
  title: string,
  desc: string,
}

interface card2 {
  age: number
}


let card1: card2 = {
  title: '標題',
  desc: '內容',
  age: 14
}