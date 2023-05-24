const $slt = document.querySelector.bind(document);

var modalOpenBtn = $slt('.modal__open');
var modal = $slt('.modal');
var modalCloseBtn = $slt('.modal__close');

function toggleModal(event) {
  modal.classList.toggle('js-open');
}

modal.addEventListener('click', function(event) {
  if (event.target == event.currentTarget) {
    toggleModal();
  }
});

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);
