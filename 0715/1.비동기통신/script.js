// 옛날꺼
const xhr = new XMLHttpRequest();
xhr.open("POST","https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type","application/json"); // 보내주는 데이터 정보

const data = {
  userId: 100,
  title: '비동기통신 연습',
  body: '이것저것보내는중'
};

xhr.send( JSON.stringify(data) );

xhr.onload = () => {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드
  console.log( JSON.parse( xhr.response )); // 응답 데이터
}

// 요즘꺼
// fetch('요청주소')
// .then((변수) => 성공시 처리할코드)
// .catch((e) => 요청 실패시 처리할코드)

const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userId = document.querySelector('.userId');
const body = document.querySelector('.body');

getBtn.addEventListener('click', () => {

  fetch('https://jsonplaceholder.typicode.com/posts/3')
    // 성공했을때
    .then( (response) => response.json() )
    .then( (data) => {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
    })
    // 실패했을때
    .catch( e => {
      console.log(e);
    })

})

const post_userId = document.querySelector("[name='userId']")
const post_title = document.querySelector("[name='title']")
const post_body = document.querySelector("[name='body']")

postBtn.addEventListener( 'click', (e) => {
  e.preventDefault();
 
  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      "content-type" : "application/json"
    }
  }).then( response => response.json())
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료!');
    })
    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패');
    })

});

const async_test = document.querySelector('.async');
// async를 사용하려면 함수쪽에 async를 쓰고 안에 await을 써줘야 함
async_test.addEventListener( 'click', async () => {

  let a = 1;
  a = await fetch('https://jsonplaceholder.typicode.com/posts/3')
  a = await a.json();
  console.log(a);

});

function add(i) {

  return new Promise(resolve => {
    for(i=0; i<10000; i++) {}

    resolve(i);
  })
  // for(i=0; i<10000; i++) {

  // }
  // return i;
}