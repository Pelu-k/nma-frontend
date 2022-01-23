import React, { useState, useEffect } from "react";

const ProfessionalProfile = () => {
  // const [professionalData, setProfessionalData] = useState({});

  // const url = "http://localhost:8080/api/profesional/profile";
  // const options = {
  //   method: 'GET',
  //   Headers: {
  //     Authorization: localStorage.getItem('token'),
  //     Accept: 'application/json',
  //     'Content-type': 'application/json'
  //   }
  // };

  // const getProfessionalData = async (e) => {
  //   const res = await fetch(url, options);
  //   const data = await res.json();
  //   setProfessionalData(data);
  // };

  // useEffect(getProfessionalData);

  return (
    <div className="container">
      <h2>Perfil profesional</h2>
      <a href="professional" className="btn">Profesional</a>
    </div>
  );
};

export default ProfessionalProfile;
