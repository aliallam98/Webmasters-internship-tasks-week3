import { usersArray, validateForm } from "./script.js";
const registerForm = document.getElementById("registerForm");

const registerFormName = document.getElementById("registerFormName");
const registerFormEmail = document.getElementById("registerFormEmail");
const registerFormPassword = document.getElementById("registerFormPassword");

const registerFormNameError = document.getElementById("registerFormNameError");
const registerFormEmailError = document.getElementById(
  "registerFormEmailError"
);
const registerFormPasswordError = document.getElementById(
  "registerFormPasswordError"
);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const validationResults = validateForm({
    name: registerFormName,
    email: registerFormEmail,
    password: registerFormPassword,
  });
  validationResults.isValidEmail
    ? (registerFormNameError.innerHTML = "")
    : (registerFormNameError.innerHTML = "Name must be 3 chars at least");
  validationResults.isValidEmail
    ? (registerFormEmailError.innerHTML = "")
    : (registerFormEmailError.innerHTML = "Please Enter Valid Email");
  validationResults.isValidPassword
    ? (registerFormPasswordError.innerHTML = "")
    : (registerFormPasswordError.innerHTML =
        "Password must be 6 chars at least");
  if (
    validationResults.isValidEmail &&
    validationResults.isValidPassword &&
    validationResults.isValidName
  ) {
    const isEmailExists = usersArray.find(
      (user) => user.email === registerFormEmail.value
    );
    console.log(isEmailExists);
    if (isEmailExists) {
      return (registerFormPasswordError.innerHTML =
        "This Email already in use");
    }
    registerFormPasswordError.innerHTML = "";
    const user = {
      name: registerFormName.value,
      email: registerFormEmail.value,
      password: registerFormPassword.value,
      cart:[]
    };
    usersArray.push(user);
    localStorage.setItem("Users", JSON.stringify(usersArray));
    window.location.href = "login.html";
  }
});
