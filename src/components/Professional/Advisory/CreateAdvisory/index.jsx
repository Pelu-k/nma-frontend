import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../../Utils/Loading";
import Select from "../../../Utils/Select";

const CreateAdvisory = () => {
  const [clientes, setClientes] = useState();
  const [estado, setEstado] = useState(true);

  const obtenerClientes = async () => {
    const res = await fetch("http://localhost:8080/api/all-client", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "appication/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    setClientes(data);
  };

  const cambiarEstado = () => {
    setEstado(true);
    setTimeout(() => {
      setEstado(false);
    }, 3000);
  };

  const tipoVisita = [
    {
      id: 1,
      nombre: "normal",
    },
    {
      id: 2,
      nombre: "especial",
    },
  ];

  useEffect(() => {
    obtenerClientes();
    cambiarEstado();
  }, []);

  return (
    <>
      {estado ? (
        <Loading />
      ) : (
        <div className="container">
          <div>
            <h2 className="center">Crear capacitacion</h2>
          </div>
          {/** Foremulario de creacion de capacitacion */}
          <div>
            <form>
              <Select data={clientes} label="Clientes" id="cliente" />
              <Select data={tipoVisita} label="Tipo visita" id="tipoVisita" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAdvisory;
