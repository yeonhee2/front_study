const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');
const liTags = document.querySelectorAll('.list-group-item')

// 목록이 보이는지 안보이는지 여부
// 안보이는 상태니까 false, 보이면 true
// let isList=false; 

// btn.addEventListener( 'click', () => {
//   if(isList) {
//     // isList가 true일때 실행되는 영역
//     // true라는 소리는 목록이 현재 보이고 있다.
//     list.classList.remove('show');
//     isList = !isList;
//   } else {
//     // isList가 false일때 실행되는 영역
//     // false라는 소리는 목록이 현재 안보임
//     list.classList.add('show');
//     isList = !isList;
//   } 
// });

btn.addEventListener( 'click', () => {
  list.classList.toggle('show');
  // add, remove를 사용해도 되지만 toggle이라는 함수를 이용해도 됨
});

//jQuery
// $('.list-group').toggleClass('show');

// .querySelectorAll 한번에 모든것(배열에 담아서 리턴)을 잡아주기때문에 배열이기 때문에 한번에  이벤트가 안걸림
// 이럴경우 반복문으로 해야함

for(let i=0; i<liTags.length; i++) {
  liTags[i].addEventListener ( 'click', () => {
  alert('ㅋㅋㅋㅋㅋㅋㅋㅋ');
});
};

//jQuery
// $('.list-group-item').on('click', () => {
//   alert('ㅋㅋㅋㅋㅋㅋㅋㅋ');
// });

