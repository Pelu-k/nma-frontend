import React from "react";
import Card from "../Utils/Card";

const Professional = () => {
  return (
    <div className="container">
      <div>
        <h1 className="center">Opciones</h1>
      </div>
      <div className="row">
        <Card
          accion="Crear asesoria"
          url="/professional/create-advisory"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
        <Card
          accion="Actualizar asesoria"
          url="/professional/update-advisory"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
      </div>
    </div>
  );
};

export default Professional;
