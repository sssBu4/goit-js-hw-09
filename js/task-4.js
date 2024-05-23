const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value.trim();
  });

  if (!formValues.email || !formValues.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formValues);
  loginForm.reset();
});
