import React,{useContext, useState} from "react";
import ContextField from "./ContextField";
import { Pass } from "../App";
export default function ContextForm() {
  const {theme}=useContext(Pass)
  return (
    <div className={theme}>
      <h2>Context form</h2>
      <ContextField />
    </div>
  );
}
