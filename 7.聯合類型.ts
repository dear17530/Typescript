// 表示值為多種類型
// flag true, false, 1, 0

let flag2: boolean | number
flag2 = true
flag2 = 1

let flag3: boolean | number | string
// 只能使用聯合類型的方法, 除非再次賦值
console.log(flag3.toString());

let flag4: boolean | number | string
flag4 = true // 再次賦值會類型推斷, 給變量定義類型 
// console.log(flag4.split('')); // 會報錯

let flag5: boolean | number | string
flag5 = true
flag5 = '1'
console.log(flag5.split(''));


