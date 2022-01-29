import React from "react";
import Card from "../../Utils/Card";

const Advisory = () => {
  return (
    <div className="container">
      <div>
        <h1 className="center">Opciones</h1>
      </div>
      <div className="row">
        <Card
          accion="Crear asesoria"
          url="/advisory/create-advisory"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
        <Card
          accion="Actualizar asesoria"
          url="/advisory/update-advisory"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
      </div>
    </div>
  );
};

export default Advisory;
