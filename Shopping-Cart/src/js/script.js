export const usersArray = JSON.parse(localStorage.getItem("Users")) || [];
const productsSection = document.getElementById("products");
const cartIcon = document.getElementById("cartIcon");
const actionsDiv = document.getElementById("actions");
let products = [];

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

const authRoutes = [
  "/login.html",
  "/register.html",
];
const protectedRoutes = [
  "/index.html",
  "/cart.html",
];

console.log(window.location.href);

const currentUser = JSON.parse(localStorage.getItem("CurrentUser")) || {};
const isUserLoggedIn = !!currentUser.email;

if (authRoutes.some((route)=>window.location.href.endsWith(route)) && isUserLoggedIn) {
  window.location.href = "index.html";
}
if (protectedRoutes.some((route)=>window.location.href.endsWith(route)) && !isUserLoggedIn) {
  window.location.href = "login.html";
}

const addToCart = (id) => {
  const product = products.find((product) => product.id == id);
  const isProductExistsInCart = currentUser.cart.find(
    (product) => product.id == id
  );
  if (isProductExistsInCart) {
    isProductExistsInCart.amount++;
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
    const userToUpdate = usersArray.findIndex(
      (user) => user.email == currentUser.email
    );
    usersArray[userToUpdate] = currentUser;
    localStorage.setItem("Users", JSON.stringify(usersArray));
    updateCartAmount(currentUser.cart.length);
  } else {
    currentUser.cart.push({
      ...product,
      amount: 1,
    });
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
    const userToUpdate = usersArray.findIndex(
      (user) => user.email == currentUser.email
    );
    usersArray[userToUpdate] = currentUser;
    localStorage.setItem("Users", JSON.stringify(usersArray));
    updateCartAmount(currentUser.cart.length);
  }
};

export const updateCartAmount = (n) => {
  cartIcon.children.item(1).innerHTML = n;
};

if (productsSection) {
  const displayData = (data) => {
    let box = ``;

    for (let i = 0; i < data.length; i++) {
      box += `
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src="${data[i].image}" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-semibold text-black truncate block capitalize">${data[i].name}</p>
              <p class="text-lg text-black truncate block capitalize">${data[i].description}</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">${data[i].price}</p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">${data[i].sale_price}</p>
                </del>
                <button class="ml-auto" id="addToCartBtn-${data[i].id}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                  </svg>
                </button>
              </div>
            </div>
        </div>`;
    }

    productsSection.innerHTML = box;
    for (let i = 0; i < data.length; i++) {
      const button = document.getElementById(`addToCartBtn-${data[i].id}`);
      if (button) {
        button.addEventListener("click", () => {
          addToCart(data[i].id); // Call addToCart function with the product id
        });
      }
    }
    cartIcon.children.item(1).innerHTML = currentUser?.cart?.length || 0;
  };

  (async function getDataFromJson() {
    await fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        displayData(data);
        products = data;
      });
  })();
}

if (actionsDiv) {
  if (isUserLoggedIn) {
    cartIcon.classList.remove("hidden");
    actionsDiv.innerHTML = `
    <button class="  text-black border   px-4 py-2 rounded-md" >
        ${currentUser.name}
      </button>
    <button class="bg-indigo-500 text-white  px-4 py-2 rounded-md" id="logOut">
        Logout
      </button>`;
    const logOutBtn = document.getElementById("logOut");
    logOutBtn.onclick = () => {
      localStorage.removeItem("CurrentUser");
      window.location.reload();
    };
  } else {
    cartIcon.classList.add("hidden");
    actionsDiv.innerHTML = `<button class="bg-indigo-500 text-white px-6 py-2 rounded-md">
              <a href="login.html">Login</a>
            </button>
            <button class="bg-indigo-500 text-white px-6 py-2 rounded-md">
              <a href="register.html">Signup</a>
            </button>`;
  }
}
