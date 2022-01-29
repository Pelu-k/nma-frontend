import React from "react";

const Textarea = ({ id, label }) => {
  return (
    <div>
      <div className="input-field col s12">
        <textarea id={id} className="materialize-textarea"></textarea>
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

export default Textarea;
