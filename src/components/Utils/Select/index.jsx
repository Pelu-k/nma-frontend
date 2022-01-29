import React, { useEffect } from "react";
import M from "materialize-css";

const Select = ({ data, label, id }) => {

  useEffect(() => {
    const elem = document.querySelectorAll("select");
    M.FormSelect.init(elem);
  });

  return (
    <div className="input-field col s12">
      <select id={id}>
        <option disabled selected>
          Seleccionar {label}
        </option>
        {data.map((dato) => (
          <option key={dato.id} value={dato.id}>{dato.nombre}</option>
        ))}tabIndex
      </select>
      <label>{label}</label>
    </div>
  );
};

export default Select;
