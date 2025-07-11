const btnBoard = document.querySelector("#open");
const btnClose = document.querySelector('#close');
const modalBox = document.querySelector('.black-bg');

// js문법
btnBoard.addEventListener( 'click', () =>{
  modalBox.classList.add('show');
});

//jQuery
// $('#open').on('click', () => {
//   $('.black-bg').addClass('show');
//   $('.black-bg').fadeIn();
// });

// js문법
btnClose.addEventListener( 'click', () =>{
  modalBox.classList.remove('show');
});

//jQuery
// $('#close').on('click', () => {
//   $('.black-bg').removeClass('show');
//   $('.black-bg').fadeOut();
// });