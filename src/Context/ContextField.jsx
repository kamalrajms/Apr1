import React, { useContext } from "react";
import ContexBtn from "./ContexBtn";
import { Pass } from "../App";

export default function ContextField() {
  const { data } = useContext(Pass);
  return (
    <div>
      <label htmlFor="name">name</label>
      <input type="text" />
      <ContexBtn />
    </div>
  );
}
