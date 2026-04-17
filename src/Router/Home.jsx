import React, { useState, useEffect } from "react";
import UseParamHook from "../Component/UseParamHook";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const page = useNavigate();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 10) {
      page("/Service");
    }
    console.log("run");
  }, [count]);

  return (
    <div>
      <h2>Home component</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => page("/Service")}>move to service</button>
      <UseParamHook />
    </div>
  );
}
