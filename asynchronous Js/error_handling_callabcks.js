// Error handling using callbacks pattern

function fetchData(url, callback) {
  // Simulate an async operation
  setTimeout(() => {
    if (!url) {
      callback(new Error("URL is required"), null);
    } else {
      callback(null, { data: "Success from " + url });
    }
  }, 1000);
}

// Usage with error handling
// fetchData("https://api.example.com", (error, result) => {
//   if (error) {
//     console.error("Error:", error.message);
//   } else {
//     console.log("Result:", result);
//   }
// });

// Usage with missing URL (will trigger error)
fetchData("", (error, result) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

/*

In the fetchData function, the null values are used as part of the classic Node.js-style error-first callback pattern.
The callback signature
The callback function is expected to be called with two arguments:
JavaScriptcallback(error, result)

First argument: the error (if something went wrong)
Second argument: the successful result/data (if everything went well)

What null means in each position

callback(null, { data: "Success from " + url })
First argument is null → no error occurred
Second argument is the data → the successful result
This tells the caller: "Everything is fine, here’s your data."

callback(new Error("URL is required"), null)
First argument is an actual Error object → an error occurred
Second argument is null → no result/data (because it failed)
This tells the caller: "Something went wrong, there is no valid data."


Why use null specifically?
Using null for the result when there's an error (or for the error when there's no error) is a convention. It clearly signals "nothing here" in that position. It's not strictly required—you could use undefined—but null is commonly used in this pattern because it's explicit and intentional.

*/
