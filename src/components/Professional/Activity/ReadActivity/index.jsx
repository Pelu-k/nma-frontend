import React, { useEffect, useState } from "react";
import Badges from "../../../Utils/Badges";
import Loading from "../../../Utils/Loading";

const ReadActivity = () => {
  const [asesorias, setAsesorias] = useState();
  const [estado, setEstado] = useState(true);

  const obtenerAsesorias = async (idProfesional) => {
    const res = await fetch(
      `http://localhost:8080/api/advisory/${idProfesional}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const data = await res.json();
    setAsesorias(data);
  };

  const cambiarEstado = () => {
    setEstado(true);
    setTimeout(() => {
      setEstado(false);
    }, 4000);
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
            <h2 className="center">Lista de asesorias</h2>
          </div>
          <Badges data={asesorias} url="/activity/read-activity" icon="visibility"/>
        </div>
      )}
    </>
  );
};

export default ReadActivity;
