// 화살표함수 : 자바에 람다와 유사함
// 함수작성하는 코드를 간결하게 만들 수 있음

// function sum(a,b) {
//   return a+b;
// }

// let sum = function(a,b) {
//   return a + b;
// }

// 식이 한줄이면 return 생략 가능
let sum = (a, b) => a + b;
let sum2 = (a, b) => {
  return a + b;
} ;

// 매개변수가 없을 경우
let a = () => {
  console.log('aaaa')
};

sum(10,5);
a();