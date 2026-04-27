import React, { useState, useEffect } from "react";

export default function APIintegration() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed data to fetch");
        }
        const data = await response.json();

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p>Loading...!</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>User list</h2>
      {user.map((user) => (
        <div key={user.id}>
          <nav style={{ padding: "15px", border: "2px solid #333" }}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </nav>
        </div>
      ))}
    </div>
  );
}
