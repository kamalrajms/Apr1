import React from "react";
import style from "./List.module.css"

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango", "orange", "afefe"];

  const user = [
    { id: 1, name: "kumar" },
    { id: 2, name: "hari" },
    { id: 3, name: "rahul" },
  ];
  console.log(user.length);

  return (
    <div className={style.list}>
      <h2>List rendering</h2>
      {fruits.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
      <h2>User detailes</h2>
      {user.length > 0 ? (
        <ul>
          {user.map((person) => (
            <li key={person.id}>
              {person.id}.{person.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>no data is found</p>
      )}
    </div>
  );
}

// person={ id: 3, name: "rahul" }
