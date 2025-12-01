'use client'
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0)
  const handleAddClick = () => setCount(count + 1)
  const handleSubClick = () => count > 0 ? setCount(count - 1) : count
  const handleReset = () => setCount(0)

  return (
    <div className="text-center">
      {count === 5 ? `You have reached the limit of ${count}` : count == 0}
      <br />
      <button className="border border-yellow-600" onClick={handleAddClick}> + </button>
      <button className="border border-yellow-600" onClick={handleSubClick}> - </button>
      <button onClick={handleReset}>Reset</button>
      <h1>Result: {count}</h1>
    </div>
  );
}
