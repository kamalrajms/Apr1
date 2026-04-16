import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h2>Service Component</h2>
      <div className="sub-header">
        <Link to={"WebApp"}>WebApp</Link>
        <Link to={"AppDev"}>AppDev</Link>
      </div>
      <Outlet />
    </div>
  );
}
