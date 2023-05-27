// 1. 聲明類型不分大小寫, 但官方推薦小寫
// 2. 聲明類明包含: number, boolean, string, undefined, null
// 3. 沒有特別聲明會依值自動判斷

let num0 = 10
let num: number = 10 // 十進制
let num1: number = 0b1010 // 二進制
let num2: number = 0o12 // 八進制
num = 123
// num0 = '' // 會報錯, 因為 ts 會自動檢查

let flag: boolean
flag = false

let str: string
str = '123'

let u: undefined
u = undefined

let n: null
n = null

// 在非嚴格模式下不會報錯
let b: number = undefined
let c: number = null

function abc(a: string) {
  console.log(a);
}
abc('123')



