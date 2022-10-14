// Alius
type Age = number;
type Name = string;
type Player = {
  // 읽기전용
  readonly name: Name;
  age?: Age;
};
// 함수의 return되는 타입 정해주기
function playerMaker(name: string): Player {
  return {
    name,
  };
}
// 화살표 함수의 return되는 타입 정해주기
// const playerMaker = (name:string):Player=>({name})

const nico = playerMaker("nico");
nico.age = 12;
// nico.name = "asd";

const numbers: readonly number[] = [1, 2, 3, 4];

const names: readonly string[] = ["1", "2"];

const player: readonly [string, number, boolean] = ["nico", 1, true];
// let a: undefined = undefined;
// let b: null = null;

// TS에서 JS쓰기
const a: any[] = [1, 2, 3, 4];
const b: any = true;
a + b;

// unknown - 타입을 미리 알수 없을 때 사용
let c: unknown;

if (typeof c === "number") {
  let d = c + 1;
}
if (typeof c === "string") {
  let b = c.toUpperCase();
}

// void - 아무것도 return하지 않는 함수
function hello() {
  console.log("x");
}

// never - 함수가 return을 절대 하지 않을 때
function hi(): never {
  throw new Error("xxx");
}
