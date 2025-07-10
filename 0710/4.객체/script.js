// 객체( object ) - 자바에서 Map과 유사
// key, value가 한쌍으로 구성
// let user = {
//   key: value
// }

let user = {
  name: '홍길동',
  age: 20,
  'math score': 100
}

console.log(user.name);
console.log(user.age);
console.log(user['math score']) // 대괄호는 ''를 사용한것을 꺼내올때 사용

// 상수
const member = {
  name : '홍길동',
  age : 20
}

console.log(user);
user = 10;
console.log(user);

// 당연히 상수니까 변경을 못함
// member = 10;

// 상수지만 큰 구조는 변경하기 않고
// 안쪽 내용만 수정은 가능함 
member.name = "김자바";
console.log(member);

// 이름을 보고싶은지 나이를 보고싶은지 입력받음
let key = "name";
// 변수를 이용해서 출력가능
console.log(member[key]) // member["name"]라고 쓴거랑 똑같이 출력

let item = "바나나";

// key도 변수명으로 사용하려면 []를 이용해서 하면 됨
let cart = {
  [item] : 5
};

console.log(cart);

// 10명의 회원정보가 각각 담긴 객체 10개를 생성
function makeUserObject(name, age) {

  let obj = {
    name,
    age
  };

  return obj;
}
// key로 설정할 이름과 value설정할 매개변수가 동일하면 생략해서 하나만 써도 됨

let a = makeUserObject('홍길동', 20);
let b = makeUserObject('김자바', 11);
console.log(a, b);
// key, value 추가하기
a.addr = "강동구";
console.log(a)
// 삭제하기
delete a.addr;
console.log(a);

// 구조분해 할당

let {age,...r} = a;

console.log(age);
console.log( r );

console.log({...r, age:30});

// in연산자로 키가 있는지 없는지 확인 가능
console.log( "name" in a );
console.log( "ㅁㄴㅇ" in a );

// 향상된 for문이랑 비슷함 
for( let key in a) {
  console.log(`${key} : ${a[key]}`);
}