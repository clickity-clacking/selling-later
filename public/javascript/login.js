function openLoginForm() {
  document.getElementById("loginForm").style.display = "block";
}
function openRegisterForm() {
  document.getElementById("registerForm").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}
function closeRegisterForm() {
  document.getElementById("registerForm").style.display = "none";
}


async function loginFormHandler(event) {
  event.preventDefault();

  const login = document.querySelector('#login').value.trim();
  const password = document.querySelector('#psw').value.trim();

  if (login && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        login,
        password
      }),
      // header telling API content type it's sending is in json format
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      //will take us to 
      document.location.assign('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#un').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#newPsw').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.assign('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form-popup').addEventListener('submit', loginFormHandler);

document.querySelector('.register-form-popup').addEventListener('submit', signupFormHandler);
