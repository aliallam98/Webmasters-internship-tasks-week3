export const usersArray = JSON.parse(localStorage.getItem("Users")) || [];

export function validateForm({ email, password, name }) {
  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
  const isValidEmail = emailRegex.test(email.value);

  // Password length validation
  console.log({ email, password, name });
  const isValidPassword = password.value.length >= 6;

  // name length validation
  const isValidName = name?.value.length >= 3;

  // Return an object indicating validation results
  return {
    isValidEmail,
    isValidPassword,
    isValidName,
  };
}

const authRoutes = ["/src/login", "/src/register"];

const isUserLoggedIn = !!usersArray.find((user) => user.isLoggedIn);


if (authRoutes.some((route) => window.location.pathname.startsWith(route))) {
  if (!isUserLoggedIn) {
    window.location.href = "/src/login.html";
  }
  window.location.href = "/src/index.html";
}
