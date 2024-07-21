import { usersArray ,validateForm } from "./script.js"

const loginForm = document.getElementById("loginForm");
const loginFormEmail = document.getElementById("loginFormEmail");
const loginFormPassword = document.getElementById("loginFormPassword");
const loginFormEmailError = document.getElementById("loginFormEmailError");
const loginFormPasswordError = document.getElementById("loginFormPasswordError");



loginForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const validationResults = validateForm({email:loginFormEmail,password:loginFormPassword})
    validationResults.isValidEmail ? loginFormEmailError.innerHTML = "" : loginFormEmailError.innerHTML = "Please Enter Valid Email"
    validationResults.isValidPassword ? loginFormPasswordError.innerHTML = "" : loginFormPasswordError.innerHTML = "Password must be 6 chars at least"
    if(validationResults.isValidEmail && validationResults.isValidPassword ){
      const isUserExists = usersArray.find((user)=> (user.email === loginFormEmail.value && user.password === loginFormPassword.value))
      if (!isUserExists) {
        return loginFormPasswordError.innerHTML = "Email or Password is wrong";
      }     
      loginFormPasswordError.innerHTML = "";
      localStorage.setItem("Users",JSON.stringify(usersArray))
      localStorage.setItem("CurrentUser",JSON.stringify(isUserExists))
      window.location.href = "index.html"
    }
  })

