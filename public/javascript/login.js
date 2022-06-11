function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.form-popup').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
