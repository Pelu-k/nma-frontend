import React from "react";

const Card = ({url, accion, text}) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-content">
          <p>
            {text}
          </p>
        </div>
        <div className="card-action">
          <a href={url}>{accion}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
