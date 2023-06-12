// --------------Record<Keys, Type>--------------
// 可以直接結合 key 跟 value 的定義
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

// key 值只能用 CatName 的值
// value 只能用 interface CatInfo
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// --------------Pick<Type, Keys>--------------
// 可以沿用 interface 把「要」得定義抓出來
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// --------------Omit<Type, Keys>--------------
// 可以沿用 interface 把「不要」的定義移除
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};