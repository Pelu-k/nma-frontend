import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "../../../Utils/DatePicker";
import Input from "../../../Utils/Input";
import Loading from "../../../Utils/Loading";
import Select from "../../../Utils/Select";
import Textarea from "../../../Utils/Textarea";

const CreateAdvisory = () => {
  const [clientes, setClientes] = useState();
  const [estado, setEstado] = useState(true);

  const obtenerClientes = async () => {
    const res = await fetch("http://localhost:8080/api/clients", {
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

  const crearAsesoria = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/create-advisory", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        nombre: document.getElementById("nombreAsesoria").value,
        descChecklist: document.getElementById("checklist").value,
        fechaCreacion: new Date(document.getElementById("fechaCreacion").value),
        fechaLimite: new Date(document.getElementById("fechaLimite").value),
        fechaTermino: new Date(document.getElementById("fechaTermino").value),
        valor: document.getElementById("valor").value,
        idClienteFk: document.getElementById("cliente").value,
        idProfesionalFk: localStorage.getItem("idProfesional"),
      }),
    });
    alert(res);
    window.location.href = "/profile";
  };

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
            <h2 className="center">Crear Asesoria</h2>
          </div>
          {/** Foremulario de creacion de capacitacion */}
          <div className="row">
            <form>
              <div>
                <Input id="nombreAsesoria" label="Nombre Asesoria" />
                <Select data={clientes} label="Clientes" id="cliente" />
                {/* <Select data={tipoVisita} label="Tipo visita" id="tipoVisita" /> */}
                <DatePicker label="Fecha de creacion" id="fechaCreacion" />
                <DatePicker label="Fecha limite" id="fechaLimite" />
                <DatePicker label="Fecha de termino" id="fechaTermino" />
                <Textarea id="checklist" label="Checklist" />
                <Input id="valor" label="Valor" />
              </div>
              <div>
                <button className="btn right" onClick={crearAsesoria}>
                  <i className="material-icons right">send</i>
                  Crear
                </button>
              </div>
              <div>
                <a href="#!" className="btn">
                  <i className="material-icons left">arrow_back</i>
                  Volver
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAdvisory;
