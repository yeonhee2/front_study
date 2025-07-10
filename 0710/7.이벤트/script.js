const btn = document.querySelector('.btn');

// btn.onclick = function() {
//   alert('ㅋㅋㅋㅋㅋ');
// }

// btn.onclick = abc;

// function abc() {
//   alert("gggg")
// }

// addEventListener 함수를 이용해서 이벤트 설정을 함
// 이벤트 종류 : 클릭, 더블클릭, 등등....
// 이벤트 핸들러 : 이벤트 발생 시 실행할 코드 -> 함수

// 요소.addEventListener(이벤트종류, 이벤트핸들러)

// 이벤트 삭제
// 요소.removeEventListener(이벤트종류, 이벤트핸들러)

btn.addEventListener( 'click', function () {
  alert('ㅋㅋㅋㅋㅋ');
})

// 위에 걸어둔 이벤트가 안지워짐
btn.removeEventListener( 'click', function () {
  alert('ㅋㅋㅋㅋㅋ');
})

function handler() {
  alert("이건 지울수 있음");
}

btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);

const btn2 = document.querySelector('.btn2');

// 이벤트 객체 : 이벤트가 발생할때 생기는 모든 정보를 가지고 있음
// 핸들러부분에 매개변수를 만들어주고 거기에 e나 event를 사용함
btn2.addEventListener('click' , function (e) {
  console.log(e.type);
  console.log(e.clientX); 
  console.log(e.target); // 이벤트가 발생한 요소
});