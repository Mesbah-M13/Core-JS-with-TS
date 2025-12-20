function checkInventory() {
  setTimeout(() => {
    console.log("Checking inventory");
  }, 1000);
}

function createOrder() {
  setTimeout(() => {
    console.log("Creating order");
  }, 3000);
}

function chargePayment() {
  setTimeout(() => {
    console.log("Charging the payment");
  }, 2000);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("Sending the invoice");
  }, 1000);
}

function main() {
  checkInventory();
  createOrder();
  chargePayment();
  sendInvoice();
}

main();
