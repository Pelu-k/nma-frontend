import React, { useEffect } from "react";
import M from "materialize-css";

const DatePicker = ({ label, id }) => {
  useEffect(() => {
    const elem = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elem);
  });

  return (
    <div className="col s12 m4">
      <label htmlFor={id}>{label}</label>
      <input type="text" className="datepicker" id={id} />
    </div>
  );
};

export default DatePicker;
