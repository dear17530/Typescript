// interface 對「對象」進行描述
// 1. 首字母要大寫 (Person)
// 2. 有時候開發時會加上 I (IPerson)
// 3. 賦值時屬性多或少都會報錯
// 4. 若是可有可無的屬性, 可在 interface 上加上 ?
// 5. 如不確定 name 時, 可以使用 [propname: string] 表任意屬性
// 6. 一個 interface 只能用一個任意屬性
// 7. 使用任意屬性時, 其他確定的屬性只能用任意屬性的子集
// 8. 只讀屬性 readonly

// ---------------object---------------
interface Person {
  readonly id: number,
  name: string,
  age: number,
  sex: string,
  width?: number,
  // [propname: string]: any,
  // [propname: string]: string // 會導致上面的 number 屬性都報錯
  [propname: string]: string | number // 這樣才不會報錯
}

let person1: Person = {
  id: 1,
  name: '小李',
  age: 12,
  sex: '女',
  width: 123,
  height: 456,
}

// person1.id = 2 // 因為有 readonly 所以會報錯
person1.age = 13
// ---------------object---------------


// ---------------array----------------
// 不常用, 理解就好
interface array1 {
  [index: number]: number
}
let arr5: array1 = [1, 2, 3]
// let arr5: array1 = [1, 2, 3, ''] // 報錯
// ---------------array----------------



// --------------function--------------
interface SearchFunc {
  // (參數:類型, ...): 返回值的類型
  (a: string, b: string): boolean
}

const fun3: SearchFunc = (a: string, b: string): boolean => {
  return a.search(b) !== -1
}

fun3('123', '1' )
// --------------function--------------
