// --------------枚舉項--------------
// 使用枚舉類型去賦予類型名稱
// 可以用參數取值, 也可以用值取參數
// 值不要重複,
// api 狀態可用

enum NumberType {
  one, // 沒有賦值會一上一個值遞增, 若為第一個數值默認為 0 遞增
  two = 1,
  three,
  four,
}

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  LIVE = 1
}

const status1 = LiveStatus.SUCCESS

// 可以用 .length 但後面不能放沒有賦值的屬性
enum color {
  red,
  blue = "blue".length,
  // green
  green = 3,
}

// --------------常數枚舉--------------
// 不能用 .length 過程中不會被編譯出來
const enum obj1 {
  o,
  b,
  j
}

console.log(obj1.o); // console.log(0)

// --------------外部枚舉--------------
// 過程中不會被編譯出來, 跟常數枚舉差別在不會編譯出值
declare enum ABC {
  a, b, c
}

console.log(ABC.a); // console.log(ABC.a)