import React, { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(false);

  return (
    <div
      style={{
        backgroundColor: theme ? "#333" : "#fff",
        color: theme ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <h3>You are in a {theme ? "dark" : "light"} mode</h3>
      <button onClick={() => setTheme(!theme)}>
        switch to {theme ? "light" : "dark"} mode
      </button>
    </div>
  );
}
