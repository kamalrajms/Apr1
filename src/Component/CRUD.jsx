import React, { useState, useEffect } from "react";

export default function CRUD() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const additem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        //   api=[{},{},{},{}...]
        .then((data) => {
          // data={name:"fhbvfr",email:"nfwof"}
          const newUser = { ...data, id: user.length + 1 };
          // data={name:"fhbvfr",email:"nfwof",id:11}

          // [{},{},{},...{10}] +{}
          setUser([...user, newUser]);
        });
    }
    console.log(user);
  };

  const handleDelete = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((user) => {
            // user=[{id:1},{id:2},{id:7}....]
          return user.filter((person) => person.id !== id);
        });
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S.no</td>
            <td>name</td>
            <td>Email</td>
            <td>Option</td>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={additem}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
