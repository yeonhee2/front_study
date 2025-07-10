// 다크모드 버튼을 클릭하면 배경색과 글꼴색이 바뀜
// 배경색은 검정으로 글꼴색은 흰색

const btn = document.querySelector('.btn-mode')
const body = document.body;

btn.addEventListener('click', () => {
  alert(btn.value);
  // alert(e.target.value)
  body.style.background = 'black';
  body.style.color = 'white';
});