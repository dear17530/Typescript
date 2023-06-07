// --------------泛型--------------
// 在定義 function 時無須先定義類型, 而是使用時定義
// <T> 表任一輸入類型, 也可用其他變數表示

function getArr<T>(value: T, count: number): T[] {
  const arr: T[] = []
  for (let i = 0; i < count; i++) {
    arr.push(value)
  }
  return arr
}

// 會自動類型推斷
getArr(123, 3)
getArr('123', 3)

// 也可進一步明確定義
getArr<number>(123, 3)
getArr<string>('123', 3)

// --------------多個泛型示範--------------
function updateArr<T, U>(t: [T, U]): [U, T] {
  return [t[1], t[0]]
}

console.log(updateArr(["123", 123]));
console.log(updateArr([456, "456"]));

// --------------Class + 泛型--------------
class Print<T> {
  data: T
  constructor(t: T) {
    this.data = t
  }
}

const print1 = new Print<number>(999)
const print2 = new Print<string>("999")

let sadsad: [][]

// --------------泛型約束--------------
// 以 .length 示範
// 約束任意輸入的值, 必須有 length 屬性
interface ILength {
  length: number
}

function getLength1<T extends ILength>(x: T): number {
  return x.length
}
// console.log(getLength1(123)); // 報錯
console.log(getLength1("123"));

// --------------泛型接口--------------
interface IArr {
  <T>(value: T, count: number): Array<T>
}

let getArr1: IArr = function <T>(value: T, count: number): T[] {
  const arr: T[] = []

  for (let i = 0; i < count; i++) {
    arr.push(value)
  }

  return arr
}