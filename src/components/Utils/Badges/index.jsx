import React from "react";

const Badges = ({ data, url, icon }) => {
  return (
    <div className="row">
      <div className="collection">
        {data.map((d) => (
          <a href={`${url}/${d.id}`} className="collection-item">
            <i className="material-icons right">{icon}</i>
            {d.nombre}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Badges;
