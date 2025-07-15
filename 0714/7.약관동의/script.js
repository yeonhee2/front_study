const box = document.querySelector('.box');
const nextBtn = document.querySelector('.next');
const chk = document.querySelector('#chk')

let boxY = box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight);

let isDisabled = true;

box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  // isDisabled를 먼저
  if( isDisabled && boxHeight + scroll > boxY - 5 ) {
    chk.disabled = false;
    isDisabled = false;
  }
});

// 버튼을 누르면 
// 약관 동의를 안했을 경우 => 동의하십쇼라는 모달창
// 약관 동의를 했을 경우 => 다음 페이지로 이동합니다. 라는 모달창


nextBtn.addEventListener('click',() =>{

  if( chk.checked ) {
    alert('다음 페이지로 이동합니다.');
  } else {
    alert('동의하십쇼'); 
  }

});

// 446p. 그림으로 볼 수 있음
console.log(window.innerHeight); // 화면 높이

console.log(document.body.clientHeight); // 전체 총 높이

// 윈도우스크롤 한 높이 / ( 전체 총 높이(body) - 화면 높이(브라우저 높이)) => 스크롤을 움직일 수 있는 최대치

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;


window.addEventListener( 'scroll', () => {
  console.log(window.scrollY); // 스크롤 얼마나 했는지

  const status = window.scrollY / ( bodyHeight - innerHeight ) * 100;

  // console.log("비율임",status);

  document.querySelector('.status-bar').style.width = `${status}%`;
});