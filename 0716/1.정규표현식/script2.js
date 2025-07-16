const idInput = document.querySelector('#id-txt');
const pwInput = document.querySelector('#pw-txt');
const emailInput = document.querySelector('#email-txt');
const telInput = document.querySelector('#phone-txt');

const idCheck = document.querySelector('#id-check');
const pwCheck = document.querySelector('#pw-check');
const emailCheck = document.querySelector('#email-check');
const telCheck = document.querySelector('#phone-check');

const submitBtn = document.querySelector('.reg-req-btn');

// 8~20자 영문대소문자, 숫자, 밑줄 조합이 가능함
const regexId = /^\w{8,20}$/;  // 문자로 시작하고 문자,숫자,언더라인중 아무거나로 끝남
// {8,}은 8자 이상, [A-Za-z\d@$!%*?&]은 알파펫대소문자, 숫자, 지정된 특수문자
// 대신 각 알파벳대소문자, 숫자, 특수문자는 1개 이상이어야함
// (?=.*[ ] ) []안에 들어있는 조건이 해당되어있는지 정규식
const regexPw =
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// \. : 정규식에 . 이 들어가기때문에 \를 붙여줌
// asd123.aaa@naver.com -> 이렇게 작성해도 됨   
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

/*
  input : 사용자가 입력한 input 태그
  regex : 해당 정규식
  eled : 정규식 검사 후 결과를 표시할 p태그
*/
function validateInput(input, regex, elem) {
  let value = input.value;

  if(regex.test(value)) {
    elem.innerHTML = '사용 가능합니다.';
    elem.classList.add('valid');
    return true;
  } else {
    elem.innerHTML = '사용 불가능합니다.';
    elem.classList.remove('valid');
    return false;
  }
}

// 회원가입버튼 활성화/비활성화 시켜주는 함수
function updateSubmit() {
 const idResult = validateInput(idInput, regexId, idCheck);
 const pwResult = validateInput(pwInput, regexPw, pwCheck);
 const emailResult = validateInput(emailInput, regexMail, emailCheck);
 const telResult = validateInput(telInput, regexTel, telCheck);

 if(idResult && pwResult && emailResult && telResult) {
  // 회원가입버튼 활성화
  submitBtn.disabled = false;
  submitBtn.classList.add('enabled');
 } else {
  // 비활성화
  submitBtn.disabled = true;
  submitBtn.classList.remove('enabled')
 }

}

idInput.addEventListener( 'input', () =>{
  updateSubmit();
});

pwInput.addEventListener( 'input', () => {
  updateSubmit();
})

emailInput.addEventListener( 'input' , () => {
  updateSubmit();
})

telInput.addEventListener( 'input' , () => {
  updateSubmit();
})
