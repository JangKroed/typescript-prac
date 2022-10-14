// Alius
type Age = number;
type Name = string;
type Player = {
  name: Name;
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

console.log(nico);
