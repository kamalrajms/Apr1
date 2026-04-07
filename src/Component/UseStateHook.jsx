import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(true);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      {user ? <p>welcome back...</p> : <p>please login</p>}
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi
          perferendis distinctio, necessitatibus doloremque laboriosam numquam
          obcaecati praesentium iure perspiciatis, deserunt ullam accusamus!
          Aspernatur earum quibusdam nostrum, ex quidem voluptatem?
        </p>
      )}
      <button onClick={() => setUser(!user)}>Sign {user ? "out" : "in"}</button>
    </div>
  );
}
// !true==false
// !false==true