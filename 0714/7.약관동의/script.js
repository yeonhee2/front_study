const box = document.querySelector('.box');
const btn = document.querySelector('button');
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

let isNext = false;

btn.addEventListener('click',() =>{

  if( isNext === chk.checked ) {
    alert('동의하십쇼')
    
  } else {
    alert('다음 페이지로 이동합니다.')
    
  }

})