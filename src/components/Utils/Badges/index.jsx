import React from "react";

const Badges = ({ asesorias }) => {
  return (
    <div className="row">
      <div className="collection">
        {asesorias.map((asesoria) => (
          <a href={`/activity/create-activity/${asesoria.id}`} className="collection-item">
            <i className="material-icons right">add_circle</i>
            {asesoria.nombre}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Badges;
