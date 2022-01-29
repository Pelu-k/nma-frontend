import React from "react";
import Card from "../../Utils/Card";

const Activity = () => {
  return (
    <div className="container">
      <div>
        <h1 className="center">Opciones</h1>
      </div>
      <div className="row">
        <Card
          accion="Ver actividad"
          url="/activity/read-activity"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
        <Card
          accion="Crear actividad"
          url="/activity/create-activity"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
        <Card
          accion="Actualizar actividad"
          url="/activity/update-activity"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
        <Card
          accion="Cancelar actividad"
          url="/activity/delete-activity"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores similique deserunt quam eum corporis!"
        />
      </div>
    </div>
  );
};

export default Activity;
