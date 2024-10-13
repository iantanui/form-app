document.getElementById("calculateBtn").addEventListener("click", function () {
  let itemName = document.getElementById("itemName").ariaValueMax;
  let quantity = parseFloat(document.getElementById("quantity").value);
  let price = parseFloat(document.getElementById("price").value);
  let cashIn = parseFloat(document.getElementById("cashIn").value);

  // validate inputs
  if (
    isNaN(quantity) ||
    quantity <= 0 ||
    isNaN(price) ||
    price <= 0
  ) {
    alert("Please enter valid item details.");
    return;
  }

  // VAT (16%)
  let total = quantity * price;
  let vat = total * 0.16;
  total += vat;

  // set the total
  document.getElementById("total").value = total.toFixed(2);

  // cash in and calculate balance
  if (!isNaN(cashIn) && cashIn >= total) {
    let balance = cashIn - total;
    document.getElementById("balance").value = balance.toFixed(2);
  } else {
    document.getElementById("balance").value = "Insufficient cash";
  }
});
