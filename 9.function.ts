// --------------基本--------------
function add(a: number, b: number): number {
  return a + b
}

const count = function (a: number, b: number): number {
  return a + b
}

// ts 完整寫法
// => 左邊表示參數類別
// => 右邊表示返回值類別
const count2: (a: number, b: number) => number = function (a: number, b: number): number {
  return a + b
}
// console.log(count2(1)); // 報錯
// console.log(count2(1, 2, 3)); // 



// --------------可選參數及預設值--------------
// 加上問號變可選參數, 可選參數只能放最後且不能加上預設值
const getName = function (a: string, c: string = '先生/小姐', b?: string): string {
  return a + b
}
console.log(getName('小'));



// --------------剩餘參數--------------
function fun4(a: string, b: string, ...args: number[]) {
  console.log(a, b, args);
}
console.log(fun4('', '', 1, 2, 3, 4));



// --------------函數重載--------------
// function newAdd(a: string, b: string): string
// function newAdd(a: number, b: number): number

// 用聯合類型寫會造成提示不明確, 因此可以加上 39 ~ 40
function newAdd(a: number | string, b: number | string): number | string {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b
  } else if (typeof a == 'string' && typeof b == 'string') {
    return a + b
  }
}
console.log(newAdd(1, 1) );
