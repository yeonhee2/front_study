document.querySelector('a').addEventListener( 'click', (e) => {
  // alert('네이버로 이동합니다.')
  // 기본동작 막아줌
  e.preventDefault();
})

// 우클릭 막기
document.querySelector('p').addEventListener('contextmenu',(e) => {
  e.preventDefault();
  alert('zzzz');
})

// 드래그 막기
document.querySelector('p').addEventListener('selectstart',(e) => {
  e.preventDefault();
  alert('드레그하지마쇼');
})