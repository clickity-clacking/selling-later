function openLoginForm() {
  document.location.assign('/dashboard/');
}


async function loginFormHandler() {

  const login = document.querySelector('#login').value.trim();
  const password = document.querySelector('#psw').value.trim();

  if (login && password) {
    const response = await fetch('/api/users/login', {
      method: 'get',
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


document.querySelector('.login-form-popup').addEventListener('submit', loginFormHandler);

