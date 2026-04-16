import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
        ...state,
        [action.field]:action.value
    }
  }
//   action={
//     field: name,
//     value:state.name
//   }
  const [state, dispatch] = useReducer(formReducer, initialState);
  function handleInput(e) {
    dispatch({
      field: e.target.name,     // name
      value: e.target.value,  //state.name
    });
  }
  return (
    <div>
      <h2>Reducer Form</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleInput}
        placeholder="Enter a name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleInput}
        placeholder="Enter a email"
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleInput}
        placeholder="Enter a password"
      />
    </div>
  );
}
