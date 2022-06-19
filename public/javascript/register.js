function openRegisterForm() {
  document.location.assign("/dashboard/");
}

async function registerFormHandler() {
  const email = document.querySelector("#email").value.trim();
  const username = document.querySelector("#un").value.trim();
  const password = document.querySelector("#newPsw").value.trim();

  if (email && username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      // header telling API content type it's sending is in json format
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //will take us to
      document.location.assign("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".register-form-popup")
  .addEventListener("submit", signupFormHandler);
