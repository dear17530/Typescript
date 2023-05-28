// 跟 any 相反, 比較常用在 function 上,表沒有任何返回值
function fun1(): void {
  console.log(123);
  // return undefined // 沒有 return
}

console.log(fun1);


// 定義函數的返回值是這樣寫
function fun2(): number {
  return 123
}