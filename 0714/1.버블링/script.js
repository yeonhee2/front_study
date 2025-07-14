document.querySelector('.container').addEventListener( 'click', (e) => {
  console.log(e.target);
})

document.querySelector('b').addEventListener( 'click', (e) => {
  // 버블링 막기
  e.stopPropagation();
  alert('b태그 클릭');
})