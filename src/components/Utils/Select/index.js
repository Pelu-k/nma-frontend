import React, { useEffect, useState } from "react";
import M from "materialize-css";

const Select = ({ data, label, id}) => {
  const [valor, setValor] = useState()

  useEffect(() => {
    const elem = document.querySelectorAll("select");
    M.FormSelect.init(elem);
  });

  return (
    <div className="input-field col s12 m6 l6">
      <select onChange={(e) => setValor(e.target.value)} id={id}>
        <option disabled selected>
          Seleccionar {label}
        </option>
        {data.map((dato) => (
            <option key={dato.id}>{dato.nombre}</option>
          ))}
      </select>
      <label>{label}</label>
    </div>
  );
};

export default Select;