import React from "react";
import "./Condition.css";

export default function ConditionalRender() {
  const user = false;
  return (
    <div className="Condition">
      <h2 style={{ padding: "20px", color: "#fff" }}>conditional rendering</h2>
      {user ? <p>Welcome back...</p> : <p>Please login...!</p>}
      <h2>logical operator</h2>
      {user && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est amet
          dolorem repellat voluptatum aspernatur, quas nesciunt. Ducimus est
          omnis reiciendis alias, velit enim, vitae sequi eum illum deleniti,
          sit repudiandae.
        </p>
      )}

      <div className="condition-box"></div>
      <div className="condition-header"></div>
      <div className="condition-footer"></div>
      <div className="condition"></div>
      <div className="condition"></div>
    </div>
  );
}
