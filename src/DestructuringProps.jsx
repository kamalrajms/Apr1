import React from "react";

export default function DestructuringProps({ name, age, phone, gender }) {
  const theme = {
    backgroundColor: "yellow",
    color: "#fff",
    padding: "20px",
  };
  return (
    <div style={theme}>
      <h2>name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>phone num:{phone}</h2>
      <h2>Gender:{gender}</h2>
    </div>
  );
}
