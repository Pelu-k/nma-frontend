import React, { useEffect, useState } from "react";
import BadgesCollapsibles from "../../../Utils/BadgesCollapsibles";
import Loading from "../../../Utils/Loading";

const UpdateAdvisory = () => {
  const [estado, setEstado] = useState(true);
  const [asesorias, setAsesorias] = useState();

  const obtenerAsesorias = async (idUsuario) => {
    const res = await fetch(`http://localhost:8080/api/advisory/${idUsuario}`, {
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
            <h2 className="center">Asesorias</h2>
          </div>
          <BadgesCollapsibles asesorias={asesorias} />
        </div>
      )}
    </>
  );
};

export default UpdateAdvisory;
