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
// fetchData('https://api.example.com', (error, result) => {
//   if (error) {
// 	console.error('Error:', error.message);
//   } else {
// 	console.log('Result:', result);
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
