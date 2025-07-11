// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  { name : 'apple', memo : '빨갛고 맛있는 사과' },
  { name : 'mango', memo : '달달하고 맛있음' },
  { name : 'melon', memo : '그냥 맛있다' },
  { name : 'strawberry', memo : '크고 달달한 딸기'},
  { name : 'watermelon', memo : '씨가 적은 수박'}
];
// const cardTitle = document.querySelectorAll('.card-body h5');
// const cardMemo = document.querySelectorAll('.card-body p');
// const cardImg = document.querySelectorAll('img');

// for ( let i = 0; i<FRUITS.length; i++ )  {
//   cardTitle[i].innerHTML = FRUITS[i].name;
//   cardMemo[i].innerHTML = FRUITS[i].memo;
//   cardImg[i].setAttribute( 'src', `./images/${FRUITS[i].name}.jpg` );

// }  

// document.querySelectorAll('.card-body h5')[0].innerHTML = FRUITS[0].name;
// document.querySelectorAll('.card-body p')[0].innerHTML = FRUITS[0].memo;
// document.querySelectorAll('img')[0]
//         .setAttribute( 'src', `./images/${FRUITS[0].name}.jpg` );

for(let i = 0; i<FRUITS.length; i++) {
  let card = `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="./images/${FRUITS[i].name}.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${FRUITS[i].name}</h5>
          <p class="card-text">${FRUITS[i].memo}</p>
          <button class="btn btn-primary cart">담기</button>
        </div>
      </div> 
    </div>
  `;

  document.querySelector('.row').insertAdjacentHTML('beforeend',card);
}

// document.querySelector('.row').innerHTML = card; 
// document.querySelector('.row').innerHTML = 
//            document.querySelector('.row').innerHTML + card; 

// 이렇게 하니까 그냥 글자로 들어가버림
// document.querySelector('.row').append(card);

// beforebegin : 해당 요소 앞에 html을 넣어줌 - 형제 관계
// afterbegin : 해당 요소 첫번째 자식으로 추가
// beforeend : 해당 요소 마지막 자식으로 추가
// afterend : 해당 요소 뒤에 넣어줌 - 형제 관계

// 향상된 for문과 비슷
// 변수에는 하나만 넣으면 순차적으로 처리 두번째에도 방번호를 알고 싶으면 변수를 넣을 수 있음 (i or index)
// FRUITS.forEach( (data, i) => {
//   console.log(data.name, i);
// })

// 담기 로컬스토리지
const cart = document.querySelectorAll('.cart');

for(let i=0; i<cart.length; i++) {
  cart[i].addEventListener('click', (e) => {
    let nameTag =  e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML;

    let temp = localStorage.getItem('cart');
    if( temp != null) {
      // 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야함
      // 문자열 형태이므로 원본인 배열로 되돌려줌
      temp = JSON.parse(temp);

      // 새로 장바구니에 담을 name을 추가
      temp.push(name);
      // 추가된 정보를 로컬스토리지에 다시 넣음
      localStorage.setItem('cart', JSON.stringify(temp));

    } else  {
      localStorage.setItem( 'cart', JSON.stringify( [name] ) );
    }

    // 담기버튼을 누르면 새로운개 추가되는게 아니라 계속 기존꺼 사라지면서 새거만 추가됨
    // 그냥 setItem으로는 불가능함 => 동일한key를 넣으면 기존꺼 사라짐
    // localStorage.setItem( 'cart', JSON.stringify( [name] ) )
  });
};


// 로컬스토리지
let arr = [1,2,3,4,5];
let obj = {
  name : 'kim',
  age : 20
};
// 로컬스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
localStorage.setItem( 'arr', arr);
localStorage.setItem( 'obj', obj);

// JSON형식으로 변환 ex)"[1,2,3,4]"
// arr인 배열을 문자열(JSON)로 변환 / 직렬화
let arr_json = JSON.stringify(arr);

// 배열은 아니지만 배열 구조 ( 대괄호 ) 가 유지된채로 문자열이 됨
localStorage.setItem('arr', arr_json);

arr = localStorage.getItem('arr');
// 로컬스토리지에서 꺼내와도 아직까진 문자열임 ( 구조가 살아있는 상태 )
console.log(arr, typeof arr);

// 문자열인 형태를 다시 배열로 되돌려줌 / 역직렬화
arr = JSON.parse(arr);

console.log(arr, typeof arr);
