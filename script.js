const input = document.querySelector('.email');
const err = document.getElementById('error');
const btn = document.getElementById('btn');
const placeholder = input.getAttribute('placeholder');


function handleSubmit(e) {
  e.preventDefault();
  const email = input.value.trim();

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // Email is valid, remove error message and allow form submission
    err.textContent = '';
    input.classList.remove('error-input');
    // Redirect to success.html (You can change this URL as needed)
    window.location.href = 'success.html';
  }else if(email) {
    // Email is not valid, display error message and style the input as red
    err.textContent = 'Enter valid email.';
    input.classList.add('error-input');
    err.classList.add('error');
    reset(2000)
}else {
    err.textContent = 'Email Required!!'
    err.classList.add('error');
    input.classList.add('error-input');
    reset(2000);
  }
}
// reset function
function reset(time) {
    setTimeout(() => {
        err.textContent = '';
        input.classList.remove('error-input');
        err.classList.remove('error');
        input.value = '';
         }, time);
}
btn.addEventListener('click', handleSubmit)