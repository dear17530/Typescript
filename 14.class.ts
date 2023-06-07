// --------------class--------------
// 放置屬性和方法
class PersonClass {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHi(str: string) {
    console.log('hi' + str);
  }
}

let p = new PersonClass('李王', 123) // new 的時候, 會執行構造的方法 constructor
p.sayHi('李四')


// --------------繼承--------------
// 類與類之間的關係
// 子類繼承父類

// 父類
class Animal {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHi(str: string) {
    console.log('hi' + str);
  }
}

// 子類
class Dog extends Animal {
  constructor(name: string, age: number) {
    // super: 調用父類的 constructor 
    super(name, age)
  }

  sayHi(str: string) {
    console.log('我是狗', this.name);
    // super: 調用父類的 func 
    super.sayHi('animal的')
  }
}

const animal = new Animal('狗', 14)
animal.sayHi('狗')
const dog = new Dog('拉不拉多', 13)
dog.sayHi('拉不拉多') // 如果沒有寫 44 ~ 48 的話, 可以直接使用父層的 func

// --------------存取器--------------
// 使用 getter 和 setter 可以改變屬性的賦值和讀取行為
class Name {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return this.firstName + '-' + this.lastName
  }

  set fullName(value) {
    let name = value.split('-')
    this.firstName = name[0]
    this.lastName = name[1]
  }
}

const nameClass = new Name('張', '小明')
console.log(nameClass.fullName);
console.log(nameClass.fullName = '張-大明');

// --------------靜態方法 static--------------
// static 不用透過 Instance 呼叫, 可直接透過 class 呼叫
class A {
  static nameA: string = 'nameA'
  static sayHi() {
    console.log('hi');
  }
}

const a1 = new A()
// console.log(a1.nameA); // 報錯
console.log(A.nameA);
// console.log(a1.sayHi()); // 報錯
// console.log(A.sayHi());

// --------------修飾符 public private 和 protected--------------
// public 是默認狀態, 有寫沒什麼差別
// private 只能在 class 內使用, 可以繼承但不能訪問
// protected 只能在 class 內使用, 可以繼承且子類可以訪問
class B {
  public name1: string
  private name2: string
  protected name3: string

  public constructor(name1: string, name2: string, name3: string) {
    this.name1 = name1
    this.name2 = name2
    this.name3 = name3
  }
  public p() {
    console.log(this.name1);
  }

  private p2() {
    console.log(this.name2);
  }
}

const b1 = new B('小李', '私有小李', '保護小李')
console.log(b1.name1);
b1.p()
// console.log(b1.name2); // 報錯
// b1.p2() // 報錯

class C extends B {
  constructor(name1: string, name2: string, name3: string) {
    super(name1, name2, name3)
  }

  sayHi2() {
    // console.log(this.name2); // 報錯
    console.log(this.name3);
  }
}

const c1 = new C('小王', '私有小王', '保護小王')
// console.log(c1.name2); // 報錯
// --------------補充 js 私有變數 #--------------
class Live {
  #name
  constructor(name: string) {
    this.#name = name
  }
}

const live = new Live('小王')
console.log('live', live); // live Live {}

// --------------readonly--------------
// 只在 constructor 修改
class D {
  readonly age: number

  constructor(age: number) {
    this.age = age + 1
  }

  update() {
    // this.age = this.age + 2 // 報錯
  }
}
const d = new D(123)
// d.age = 123 // 報錯
console.log(d.age);

// readonly, public, private, protected 可寫在參數裡, 會直接初始化
class D1 {
  constructor(readonly age: number) {
    // constructor(public age: number) {
    // constructor(private age: number) {
    // constructor(protected age: number) {
  }
}
const d2 = new D1(123)
console.log(d2.age);

// --------------類的類型--------------
class Car2 {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Ben {
  // age: number // 下面會報錯
  name: string
  constructor(name: string) {
    this.name = name
  }
}

// 因為兩個 class 相同, 所以可以這樣寫
const car: Ben = new Car2('')
const ben: Car2 = new Ben('')

// --------------implements--------------
// class 也可以實作 interface, 但就不能使用修飾符 public, private,protected
interface CarProps {
  name: string
  age: number
  start: () => void
}
class Car implements CarProps {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  start() { }
}

// 實作時可以把 interface export 出去, 方便共用
export interface CarProps1 {
  name: string
  age: number
  start: () => void
}
class Car1 implements CarProps1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  start() { }
}

// 也可以同時實作兩個 interface

interface CarProps2 {
  name: string
  start: () => void
}

interface CarProps3 {
  age: number
  end: () => void
}
class Car3 implements CarProps2, CarProps3 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  start() { }
  end() { }
}


// --------------extends--------------
// interface 繼承 class 且實現 class
class NewPerson {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    console.log('hi');
  }
}

interface IPerson extends NewPerson {
  age: number
}

let person: IPerson = {
  name: "小王",
  age: 22,
  sayHi() {
    console.log('hi');
  },
}