// function show() { 
//    document.getElementById('ab').style.display = 'block';
// }

// function hide() {
//   document.getElementById('ab').style.display = 'none';
// }

function showHide(state) {
  // JS 문법
  // document.getElementById('ab').style.display = state;

  // jQuery 문법
  $('#ab').css( 'display', state );
}

function showMsg(msg) {
  // JS 문법
  // document.querySelector('.alert').innerHTML = msg;

  // jQuery 문법
  $('.alert').html(msg);
}

