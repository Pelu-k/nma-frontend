import React, { useEffect, useState } from "react";
import Badges from "../../../Utils/Badges";
import Loading from "../../../Utils/Loading";

const UpdateAdvisory = () => {
  const [estado, setEstado] = useState(true);
  const [asesorias, setAsesorias] = useState();

  const obtenerAsesorias = async (idProfesional) => {
    const res = await fetch(`http://localhost:8080/api/advisory/${idProfesional}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "appication/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    setAsesorias(data);
  };

  const cambiarEstado = () => {
    setEstado(true);
    setTimeout(() => {
      setEstado(false);
    }, 3000);
  };

  useEffect(() => {
    obtenerAsesorias(localStorage.getItem("idProfesional"));
    cambiarEstado();
  }, []);

  return (
    <>
      {estado ? (
        <Loading />
      ) : (
        <div className="container">
          <div>
            <h2 className="center">Asesoria</h2>
          </div>
          <Badges asesorias={asesorias} />
        </div>
      )}
    </>
  );
};

export default UpdateAdvisory;
