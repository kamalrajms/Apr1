import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handlechange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handlechange2 = (e) => {
  //     const { checked, name } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };
  const handleForm = (e) => {
    e.preventDefault();
    // console.log("hello");
    if(!formData.userName || !formData.password || !formData.email){
        setError("All fields are required")
        return;
    }
    if(!formData.terms){
        setError("must Accept checkbox")
        return;
    }
    setError("")
    alert("form data is submitted successfully")
    console.log(formData);
    
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <h2>Conditional form</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <input
          type="text"
          value={formData.userName}
          onChange={handlechange}
          name="userName"
          placeholder="Enter name"
        />
        <input
          type="email"
          value={formData.email}
          onChange={handlechange}
          name="email"
          placeholder="enter email"
        />
        <input
          type="password"
          value={formData.password}
          onChange={handlechange}
          name="password"
          placeholder="enter password"
        />
        <input
          type="checkbox"
          checked={formData.terms}
          onChange={handlechange}
          name="terms"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
