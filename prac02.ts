// call signature
// type Add = (a: number, b: number) => number;
// type을 추론할수 있게 해준다.
// const add: Add = (a, b) => a + b;

// overloading
/**
 * call signature를 다른식으로 쓸수 있다
 * type Add = {
 *     (a: number, b: number) => number
 * }
 * 이런 방법이 가능한 것은 오버로딩 덕분이다.
 * 오버로딩은 함수가 여러개의 call signatures를 가지고 있을때
 * 발생하는데 그저 여러개가 아닌 서로 다른 여러 개의 call signature를
 * 가졌을때이다.
 */
// type Add = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };

// const add: Add = (a, b) => {
//   if (typeof b === "string") return a;
//   return a + b;
// };

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);

