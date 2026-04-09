import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  //   formData={
  //     name: "",
  //     email: "",
  //     age: "",
  //   }

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
        ...formData,                    // previous value
        [name]:value  // new data going to update  in same object

    })
  }
//   const handleChange=(e)=>{
//     const {name,value}=e.target
//     setFormData({
//         ...formData,                    // previous value
//         [e.target.name]:e.target.value  // new data going to update  in same object

//     })
//   }

  return (
    <div>
      <h2>Reg-form</h2>
      <input
        type="text"
        value={formData.name}
        name="name"
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input 
        type="number"
        value={formData.age}
        name="age"
        onChange={handleChange}
        placeholder="Enter age"
      />
    </div>
  );
}

