function checkInventory(callback) {
  setTimeout(() => {
    console.log("Checking inventory");
    callback();
  }, 1000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Creating order");
    callback();
  }, 3000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Charging the payment");
    callback();
  }, 2000);
}

function sendInvoice(callback) {
  setTimeout(() => {
    console.log("Sending the invoice");
    callback();
  }, 1000);
}

function main() {
  checkInventory(() => {
    createOrder(() => {
      chargePayment(() => {
        sendInvoice(() => {
          console.log("All Done");
        });
      });
    });
  });
  console.log("Other requests are processing..."); // it will print 1st as others are showing result from asynchronous call
}

main();
