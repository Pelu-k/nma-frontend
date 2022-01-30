import React, { useEffect } from "react";
import M from "materialize-css";

const BadgesCollapsibles = ({ asesorias }) => {
  const cancelarAsesoria = async (idAsesoria) => {
    try {
      await fetch("http://localhost:8080/api/update-advisory", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          id: idAsesoria,
          estado: "Cancelada",
        }),
      });
      alert("Aseseria cancelada");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const elem = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elem);
  });

  return (
    <div className="row">
      <ul className="collapsible">
        {asesorias.map((asesoria) => (
          <li>
            <div className="collapsible-header">{asesoria.nombre}</div>
            <div className="collapsible-body">
              <div className="input-field">
                <p>ID Asesoria: {asesoria.id}</p>
                <p>Numero: {asesoria.numero}</p>
                <p>Nombre empresa: {asesoria.nombreEmpresa}</p>
                <p>Nombre profesional: {asesoria.nombreProfesional}</p>
                <p>Valor: {asesoria.valor}</p>
                <p>Estado: {asesoria.estado}</p>
                {asesoria.estado === "Cancelada" ? null : (
                  <>
                    <a href="#!" className="btn blue">
                      Agregar actividad
                    </a>
                    <a
                      href="#!"
                      className="btn red right"
                      onClick={() => cancelarAsesoria(asesoria.id)}
                    >
                      Cancelar asesoria
                    </a>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BadgesCollapsibles;
