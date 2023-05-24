const successBtn = document.querySelector('.btn.btn--success');
successBtn.onclick = function() {
  showSuccessToast();
}
const errorBtn = document.querySelector('.btn.btn--error');
errorBtn.onclick = function() {
  showErrorToast();
}
const infoBtn = document.querySelector('.btn.btn--info');
infoBtn.onclick = function() {
  showInfoToast();
}
const warningBtn = document.querySelector('.btn.btn--warning');
warningBtn.onclick = function() {
  showWarningToast();
}


//Show messages
function showSuccessToast() {
  toast({
    type: 'success',
    title: 'Success',
    message: 'Your work is successfully done. Check it out!',
    duration: 6000
  });
}

function showWarningToast() {
  toast({
    type: 'warning',
    title: 'Warning',
    message: 'Your work wasn\'t done right. Try again.',
    duration: 6000
  });
}

function showErrorToast() {
  toast({
    type: 'error',
    title: 'Error',
    message: 'There was an error in your work. Again!',
    duration: 6000
  });
}

function showInfoToast() {
  toast({
    type: 'info',
    title: 'Info',
    message: 'Check your mail box to make sure you are signed up!',
    duration: 6000
  });
}

//Toast function
function toast({type = '', title = '',message = '', duration = 3000}) {
  const icons = {
    success: 'fa-circle-check',
    warning: 'fa-triangle-exclamation',
    error: 'fa-circle-exclamation',
    info: 'fa-circle-info'
  };

  const toastBox = document.querySelector('.toast-box');

  const toast = document.createElement('div');

  toast.classList.add('toast', `toast--${type}`);
  toast.style.animation = `slideInLeft 350ms ease forwards, fadeOut 2000ms ${duration}ms linear forwards`;

  toast.innerHTML = /*html*/`
    <div class="toast__icon">
      <i class="fa-solid ${icons[type]}"></i>
    </div>
    <div class="toast__text">
      <h3 class="toast__title">${title}</h3>
      <p class="toast__message">${message}</p>
    </div>
    <div class="toast__close">
      <i class="fa-solid fa-xmark"></i>
    </div>
  `;

  toastBox.appendChild(toast);
  
  console.log([toast]);

  toast.onclick = function(event) {
    if (event.target.closest('.toast__close')) {
      toastBox.removeChild(toast);
      clearTimeout(autoRemove);
    }
  }

  //Auto remove toast
  const autoRemove = setTimeout(function() {
    toastBox.removeChild(toast);
  }, duration + 2000);
}