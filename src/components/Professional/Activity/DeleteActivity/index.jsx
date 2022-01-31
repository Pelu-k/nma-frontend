import React, { useEffect, useState } from "react";
import Badges from "../../../Utils/Badges";
import Loading from "../../../Utils/Loading";

const DeleteActivity = () => {
  const [asesorias, setAsesorias] = useState();
  const [estado, setEstado] = useState(true);

  const obtenerAsesorias = async (idUsuario) => {
    const res = await fetch(
      `http://localhost:8080/api/advisory/${idUsuario}`,
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
    obtenerAsesorias(localStorage.getItem("idUsuario"));
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
          <Badges
            data={asesorias}
            url="/activity/delete-activity"
            icon="remove_circle"
          />
        </div>
      )}
    </>
  );
};

export default DeleteActivity;
