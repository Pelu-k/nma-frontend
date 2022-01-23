import React, { useEffect, useState } from "react";
import M from "materialize-css";

const Navbar = () => {
  const [token, setToken] = useState(false);

  const isToken = () => {
    return localStorage.getItem("token") === null;
  };

  useEffect(() => {
    setToken(isToken);
  }, []);

  useEffect(() => {
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "right",
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper light-blue lighten-1">
          <a href="/" className="brand-logo">
            Logo
          </a>
          <a
            href="#!"
            data-target="mobile-demo"
            className="sidenav-trigger right"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">¿Quienes Somos?</a>
            </li>
            {token ? (
              <li>
                <a href="/login">Login</a>
              </li>
            ) : (
              <li>
                <a href="/profile">Perfil</a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <ul className="sidenav " id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">¿Quienes Somos?</a>
        </li>
        {token ? (
          <li>
            <a href="/login">Login</a>
          </li>
        ) : (
          <li>
            <a href="/profile">Perfil</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
