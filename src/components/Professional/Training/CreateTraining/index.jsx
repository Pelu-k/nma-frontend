import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const CreateTraining = () => {
  const [cliente, setCliente] = useState(null);
  const [tipoActividad, setTipoActividad] = useState(null);
  // const [fechaInicio, setFechaInicio] = useState("");
  // const [cantidadAsistentes] = useState(0);
  // const [duracion, setDuracion] = useState(0);
  // const [fechaLimite, setFechaLimite] = useState("");

  // Traer todos los cliente

  // datos de prueba
  const clientes = [
    {
      id: 1,
      name: "usuario1",
    },
    {
      id: 2,
      name: "usuario2",
    },
    {
      id: 3,
      name: "usuario3",
    },
  ];
  const tipoActividades = [
    {
      id: 1,
      name: "normal",
    },
    {
      id: 2,
      name: "especial",
    },
  ];
  const activida = [
    {
      id: 1,
      name: "Capacitacion",
    },
    {
      id: 2,
      name: "Gestion",
    },
    {
      id: 3,
      name: "Visita",
    },
  ];

  // const url = ""
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify({
  //     cliente: cliente,
  //     tipoActividad: tipoActividad
  //   }),
  //   Headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   }
  // }

  // const sendForm = async (e) => {
  //   e.preventDefault()
  //   // Validar campos

  //   // Enviar datos al servidor
  //   const res = await fetch(url, options)
  //   const data = await res.json()

  // }

  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="center">Crear Actividad</h1>
        <form>
          {/** Actividad */}
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>
                Seleccionar actividad
              </option>
              {activida.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
            <label>Actividad</label>
          </div>
          {/** Cliente */}
          <div className="input-field col s12 l6">
            <select onChange={(e) => setCliente(e.target.value)}>
              <option value="" disabled selected>
                Seleccionar Cliente
              </option>
              {/* generar map para agregar a todos loos cliente*/}
              {/* id-cliente   Nombre del cliente */}
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.name}
                </option>
              ))}
            </select>
            <label>Cliente</label>
          </div>
          {/** Tipo actividad */}
          <div className="input-field col s12 l6">
            <select onChange={(e) => setTipoActividad(e.target.value)}>
              <option value="" disabled selected>
                Seleccionar Tipo Actividad
              </option>
              {/* generar map para agregar a todos loos cliente*/}
              {/* id-cliente   Nombre del cliente */}
              {tipoActividades.map((tipoActividad) => (
                <option key={tipoActividad.id} value={tipoActividad.id}>
                  {tipoActividad.name}
                </option>
              ))}
            </select>
            <label>Tipo Actividad</label>
          </div>
          {/** Fecha inicio */}
          <div className="input-field col s12 l4">
            <input type="text" className="datepicker" />
            <label>Fecha de inicio</label>
          </div>
          {/** Fecha termino */}
          <div className="input-field col s12 l4">
            <input type="text" className="datepicker" />
            <label>Fecha de termino</label>
          </div>
          {/** Fecha limite */}
          <div className="input-field col s12 l4">
            <input type="text" className="datepicker" />
            <label>Fecha limite</label>
          </div>
          {/** Actividades */}
          <div className="input-field col s12">
            <textarea
              id="actividades"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="actividades">
              Ingresar actividades separadas por coma (,)
            </label>
          </div>
          <div>
            <Link to="/professional" className="btn">
              <i className="material-icons left">arrow_back</i>
              Volver
            </Link>
            <button className="btn right">
              <i className="material-icons right">send</i>
              Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTraining;
