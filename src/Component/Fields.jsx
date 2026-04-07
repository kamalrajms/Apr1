import React, { useState } from "react";

export default function Fields() {
  const [name, setName] = useState("");

  const [checked, setChecked] = useState(true);
  return (
    <div>
      <label htmlFor="">name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>name:{name}</h2>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label>check box</label>

      {/* <select name="" id="">
        <option value="apple">apple</option>
        <option value="orange">react</option>
        <option value="banana">banana</option>
      </select> */}
    </div>
  );
}
