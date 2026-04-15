import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContexBtn() {
  const { theme, setTheme } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setTheme(theme == "black" ? "light" : "black")}>
        Theme
      </button>
    </div>
  );
}
