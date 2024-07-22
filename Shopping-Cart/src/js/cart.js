import {  usersArray } from "./script.js";

const totalCartPrice = document.getElementById("totalCartPrice");
const totalCartItems = document.getElementById("totalCartItems");
const totalCartItemsTwo = document.getElementById("totalCartItemsTwo");
const priceSummary = document.getElementById("priceSummary");
const cartProducts = document.getElementById("cartProducts");

let currentUser = JSON.parse(localStorage.getItem("CurrentUser")) || {}
let cart = currentUser.cart
const updateAmountAndPrice =  ()=>{
  const totalPrice =  cart?.reduce((acc, curr) => acc  + curr.price * curr.amount , 0);

totalCartPrice.innerHTML = `${totalPrice} $`
totalCartItems.innerHTML = `${cart?.length} Items`
totalCartItemsTwo.innerHTML = `${cart?.length} Items`
priceSummary.innerHTML = totalPrice > 0  ? `${totalPrice + 10} $` : 0
}
updateAmountAndPrice()

const displayData = ()=>{
    let box = ``

for (let i = 0; i < cart?.length; i++) {
    box +=`<div
    class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
  >
    <div class="md:w-4/12 2xl:w-1/4 w-full">
      <img
        src="${cart[i].image}"
        alt="Black Leather Purse"
        class="h-full object-center object-cover md:block hidden"
      />
      <img
        src="${cart[i].image}"
        alt="Black Leather Purse"
        class="md:hidden w-full h-full object-center object-cover"
      />
    </div>
    <div
      class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center"
    >
      <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
      ${cart[i].brand}
      </p>
      <div class="flex items-center justify-between w-full">
        <p class="text-base font-black leading-none text-gray-800 my-6">
        ${cart[i].name}
        </p>
      </div>
      <p>Price: ${cart[i].price} $</p>
      <p>Amount: ${cart[i].amount} </p>

      <div class="flex items-center justify-between pt-5">
        <button id="removeFromCartBtn-${cart[i].id}"
          class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  </div>`
}
cartProducts.innerHTML = box
for (let i = 0; i < cart.length; i++) {
  const button = document.getElementById(`removeFromCartBtn-${cart[i].id}`);
  if (button) {
    button.addEventListener("click", () => {
      removeFromCart(cart[i].id);
    });
  }
}

}
displayData()

const removeFromCart = (id) => {
  const newCart = cart.filter((product) => product.id !== id);
  cart = newCart
  currentUser.cart = newCart
  localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
  const userToUpdate = usersArray.findIndex(
    (user) => user.email == currentUser.email
  );
  usersArray[userToUpdate] = currentUser;
  localStorage.setItem("Users", JSON.stringify(usersArray));
  displayData()
  updateAmountAndPrice()
};
