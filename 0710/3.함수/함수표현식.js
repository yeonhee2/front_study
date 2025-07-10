// 함수 선언문
function hello() {
  console.log('hello');
}
// 함수 표현식 : 변수에 함수가 들어간다
let hi = function () {
  console.log('hi')
}

hi();

// 콜백함수

function yes() {
  console.log("예");
}

let no = function () {
  console.log("아니오");
}

function check( question, ok, cancel) {
  if(question === 'y')
    ok();
  else
    cancel();

}
// 보낼때는 () 있으면 안됨
// 이건 함수를 매게 변수로 보내겠다는 의미
check('y',yes,no)

function buy(item, price, stock, callback) {
  console.log(`${item}을 ${stock}개를 구매함`);
  
  let total = price * stock;
  callback(total);
}

function pay(n) {
  console.log(`총 금액 : ${n}`);
}

function pay2(n) {
  console.log(`총 금액(할인적용) : ${n * 0.9}`);
}

let 할인적용여부 = 'y';

if( 할인적용여부 ==='y') {
  buy("컴퓨터", 100, 2, pay2);
} else {
  buy("컴퓨터", 100, 2, pay);
}


// setInterval(콜백함수, 시간)
// 콜백함수 : 나중에 호출되는 함수
setInterval(hello, 1000);
// setInterval(console.log('a'),1000);
setInterval(function () {
  console.log('a');
}, 1000);