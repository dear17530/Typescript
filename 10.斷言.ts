// ---------------斷言類型---------------
// 可以手動指定一個類型, 可以用在 API 回傳的資料上
// 1. 變量 as 類型 (x as string)
// 2. <類型>變量 (<string>x)

function getLength(x: string | number): number {
  if ((x as string).length) {
    return (<string>x).length
  } else {
    return x.toString().length
  }
}

console.log(getLength('123'));
console.log(getLength(123));

// ---------------API---------------

interface data {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

interface data2 {
  name: string,
}


async function getData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await res.json() as data
}

// 如果今天 data 是會根據 api 傳入的值有所異動的
// 要先 as unknown 再 as 類型
async function getData2() {
  let res2 = await fetch('https://jsonplaceholder.typicode.com/todos/2')
  let data2 = await res2.json() as data as unknown as data2
}

// ---------------斷言成 any---------------
// 將類型斷言為 any, any 是可以訪問任何方法及屬性的
// 此方法不推薦
// window.a = 10 // 會報錯
(window as any).a = 10

// ---------------斷言 any---------------
// 將 any 斷言成具體類型
// 有可能是套件的坑, 有可能是前人的坑
function newAdd2(x: any, y: any): any {
  return x + y
}

// let count3 = newAdd2(1, 2) // 會變 any
// let count4 = newAdd2(1, 2) // 會變 any
let count3 = newAdd2(1, 2) as number
let count4 = newAdd2(1, 2) as string