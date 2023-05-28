// 以基礎類型定義
let arr: [] = [] // let arr: Array = [] // 這樣寫會錯

let arr1: number[] // 全為 number 的 array
arr1 = [1] // arr1 = ['1'] // 報錯

let arr3: string[] // 全為 string 的 array
arr3 = ['1']

let arr4: string[][] // 全為 array 的 array
arr4 = [[], []]

// 以泛型定義: Array<裡面的元素>
let arr2: Array<number> = [1, 2, 3]
