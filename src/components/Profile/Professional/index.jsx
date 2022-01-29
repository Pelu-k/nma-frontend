import React from "react";
import Card from "../../Utils/Card";

const ProfessionalProfile = () => {
  return (
    <div className="container">
      <h2 className="center">Perfil profesional</h2>
      <div className="row">
        <Card
          url="/professional"
          accion="Asesoria"
          text="Seccion para crear, ver y/o cancelar asesorias."
        />
        <Card
          url="#!"
          accion="Actividad"
          text="Seccion para agregar, ver, cancelar y/o actualizar actividades asosiadas a una asesoria."
        />
      </div>
    </div>
  );
};

export default ProfessionalProfile;
