import React from "react";
import useFetch from "./useFetch";

export default function CustomAPI() {
  const {
    data: user,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>loading...!</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h3>user data</h3>
      {user.map((person) => (
        <div style={{ padding: "10px", border: "2px solid #333" }}>
          <h3>{person.name}</h3>
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}
