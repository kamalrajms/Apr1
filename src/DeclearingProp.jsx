import React from "react";

export default function DeclearingProp(props) {
  return (
    <div className="Declearing">
      <h1>name:{props.name}</h1>
      <h1>city:{props.city}</h1>
    </div>
  );
}
