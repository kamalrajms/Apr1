import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log(`count changes to: ${count},${num}`);
  }, [count, num]);

  return (
    <div>
      <h2>Hell everyone</h2>
      <h2>
        Count:{count},{num}
      </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
