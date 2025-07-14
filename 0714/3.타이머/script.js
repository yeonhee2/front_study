// 정해진 시간이 흐른 뒤 해당 코드가 작동되도록 함
// setTimeout( 콜백함수, 시간(ms));
// 5초 뒤에 콜백함수가 실행됨
const time = document.querySelector('.time');

let t = 5;

const interval = setInterval( () => {
  t--;
  time.innerHTML = t;
},1000);


setTimeout( () => {
  document.querySelector('.alert').style.display= 'none'; 
  clearInterval(interval);
},5000);

// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// setInterval( 콜백함수, 시간(ms) );
// setInterval( () => {
//   console.log('2초마다 실행되는 코드임')
// },2000)

let timer;

document.querySelector('.btn').addEventListener( 'click', () => {

  clearTimeout(timer);

  // 작동되는 순간 타이머 번호 생성 그렇기 때문에 번호를 알아야해서 변수 선언
  timer = setTimeout( () => {
    console.log('클릭하면 3초 뒤에 나타남');
  },3000);
 
});

// 날짜 관련된 함수들
// 현재 날짜와 시간
// const date = new Date();
// console.log(date);

// // 년도 추출
// console.log(date.getFullYear());
// // 월 추출 - (0부터 11로 출력)
// console.log(date.getMonth());
// // 일 추출
// console.log(date.getDate());
// // 요일 추출 - ( 0-일요일, 6-토요일)
// console.log(date.getDay());
// // 시간 추출
// console.log(date.getHours());
// // 분 추출
// console.log(date.getMinutes());
// // 초 추출
// console.log(date.getSeconds());

const clock = document.querySelector('.clock');

function insertTime() {
  const date = new Date();
  const hour = String( date.getHours() ).padStart(2,0);
  const minute = String( date.getMinutes() ).padStart(2,0);
  const second = String( date.getSeconds() ).padStart(2,0);

  clock.innerHTML = `${hour} : ${minute} : ${second}`;
}
insertTime();
setInterval( insertTime,1000);

let a = "1";
// padStart(자리수,매꿔줄값) -> 문자열 함수
console.log( a.padStart(2,0));




