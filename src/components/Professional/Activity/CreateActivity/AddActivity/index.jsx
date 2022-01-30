import React from "react";
import { useParams } from "react-router";
import DatePicker from "../../../../Utils/DatePicker";
import Input from "../../../../Utils/Input";
import Select from "../../../../Utils/Select";
import Textarea from "../../../../Utils/Textarea";

const AddActivity = () => {
  const { id } = useParams();

  const agregatActividad = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/register-activity", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        nombre: document.getElementById("nombre").value,
        valor: document.getElementById("valor").value,
        //checklist: document.getElementById("checklist").value,
        tipo: document.getElementById("tipo").value,
        fechaCreacion: new Date(document.getElementById("fechaCreacion").value),
        fechaLimite: new Date(document.getElementById("fechaLimite").value),
        fechaTermino: new Date(document.getElementById("fechaTermino").value),
        descActividad: document.getElementById("descripcion").value,
        idAsesoria: id,
      }),
    });
    alert("Actividad agregada")
    window.location.href = "/activity"
  };

  const tipoActividad = [
    {
      id: "normal",
      nombre: "normal",
    },
    {
      id: "especial",
      nombre: "especial",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div>
          <h2 className="center">Agregar actividad</h2>
        </div>
        <form>
          <Input id="nombre" label="Nombre" />
          <Input id="valor" label="Valor" />
          <Textarea id="checklist" label="Checklist (separado por coma (,))" />
          <Select id="tipo" label="Tipo" data={tipoActividad} />
          <DatePicker id="fechaCreacion" label="Fecha creacion" />
          <DatePicker id="fechaLimite" label="Fecha limite" />
          <DatePicker id="fechaTermino" label="Fecha termino" />
          <Textarea id="descripcion" label="Descripcion" />
        </form>
        <button className="btn right" onClick={agregatActividad}>
          Agregar actividad
        </button>
      </div>
    </div>
  );
};

export default AddActivity;
