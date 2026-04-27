import React from "react";
import useCount from "./useCount";

export default function CustomHook() {
  const { count, increment, decrement, reset } = useCount(10);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
