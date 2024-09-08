const qty = document.querySelector("#qty");
const cartTotal = document.querySelector("#cartTotal");
const cartSubtotal = document.querySelector("#cartSubtotal");

let total = 1599;

qty.addEventListener("change", function (e) {
  total = e.target.value * 1599;

  // format this to inr string
  total = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(total);

  cartTotal.innerHTML = total;
  cartSubtotal.innerHTML = total;
});
