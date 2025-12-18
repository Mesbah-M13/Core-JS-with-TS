function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log("Reult is:", data);
});

// ✅ What is a Callback?

// 🟰 A callback is a function passed as an argument to another function, to be executed later after an asynchronous task completes.

// 🌟⭐🌟
/*
Common Asynchronous APIs using Callbacks

- setTimeout
- setInterval
- Event listeners
- File system (Node.js)
- HTTP requests (older APIs)

*/
