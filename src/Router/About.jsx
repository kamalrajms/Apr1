import React from "react";
import UseIdHook from "../Component/UseIdHook";
import APIintegration from "../Component/APIintegration";
import CRUD from "../Component/CRUD";

export default function About() {
  return (
    <div>
      <h2>About component</h2>
      <CRUD/>
      <APIintegration />
      <UseIdHook />
      <UseIdHook />
    </div>
  );
}
