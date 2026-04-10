import React, { useState, useEffect } from "react";

export default function UseEffectAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // api=[{},{},{},{}.....]               // raw data
      .then((res) => res.json())
      // api=[{},{},{},{}.....]               // object data
      .then((data) => {
        setUser(data);
        setLoading(true)
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <ul>
          {/* user=[{},{},{},{}.....]      */}
          {/* person={id:1,name:"ejknd"} */}
          {user.map((person) => (
            <li key={person.id}>
              {person.name}--{person.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
