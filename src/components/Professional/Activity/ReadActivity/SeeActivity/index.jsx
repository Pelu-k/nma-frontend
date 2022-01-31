import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../../../Utils/Loading";

const SeeActivity = () => {
  const { id } = useParams();

  const [actividades, setActividades] = useState();
  const [estado, setEstado] = useState(true);

  const obtenerActividades = async () => {
    const res = await fetch(`http://localhost:8080/api/all-activity/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }
    });
    const data = await res.json();
    setActividades(data);
  };

  const cambiarEstado = () => {
    setEstado(true);
    setTimeout(() => {
      setEstado(false);
    }, 3000);
  };

  useEffect(() => {
    obtenerActividades();
    cambiarEstado();
  }, []);

  return (
    <>
      {estado ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <h2 className="center">Lista de actividades</h2>
          </div>
          <div className="row">
            <table className="striped responsive-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Folio</th>
                  <th>Estado</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {
                  actividades.map(actividad => (
                    <tr>
                      <td>{actividad.idActividad}</td>
                      <td>{actividad.nombre}</td>
                      <td>{actividad.folio}</td>
                      <td>{actividad.estado}</td>
                      <td>{actividad.tipo}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default SeeActivity;
