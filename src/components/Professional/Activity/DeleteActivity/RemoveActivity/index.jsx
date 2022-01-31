import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import M from "materialize-css";
import Loading from "../../../../Utils/Loading";

const RemoveActivity = () => {
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
      },
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

  const cancelarActividad = async (idActividad) => {
    try {
      await fetch(`http://localhost:8080/api/delete-activity/${idActividad}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("actividad cancelada");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerActividades();
    cambiarEstado();
  }, []);

  useEffect(() => {
    const elem = document.querySelector(".collapsible");
    M.Collapsible.init(elem);
  });

  return (
    <>
      {estado ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="row">
              <h2 className="center">Actividades</h2>
            </div>
            <div className="row">
              <ul className="collapsible">
                {actividades.map((actividad) => (
                  <li>
                    <div className="collapsible-header">{actividad.nombre}</div>
                    <div className="collapsible-body">
                      <div>
                        {actividad.estado === "Cancelada"  ? null :
                         actividad.estado === "Finalizada" ? null : (
                          <>
                            <a
                              href="#!"
                              className="btn red right"
                              onClick={() =>
                                cancelarActividad(actividad.idActividad)
                              }
                            >
                              <i className="material-icons left">
                                remove_circle
                              </i>
                              Cancelar actividad
                            </a>
                          </>
                        )}
                        <p>ID Actividad: {actividad.idActividad}</p>
                        <p>Tipo: {actividad.tipo}</p>
                        <p>Estado: {actividad.estado}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RemoveActivity;
