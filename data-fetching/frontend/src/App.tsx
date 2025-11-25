import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  console.log(backendURL);
  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>{message}</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
