import React from "react";
import { Link } from "react-router-dom";

const Training = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h2 className="center">Bienvenido</h2>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Crear Capacitación</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              placeat quam ipsa obcaecati ex odit.
            </div>
            <div className="card-action">
              <Link to="create-activity" className="btn">Crear actividad</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              placeat quam ipsa obcaecati ex odit.
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              placeat quam ipsa obcaecati ex odit.
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
