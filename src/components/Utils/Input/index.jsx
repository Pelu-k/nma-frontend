import React from "react";

const Input = ({ id, label }) => {
  return (
    <div className="input-field col s12">
      <input id={id} type="text" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
