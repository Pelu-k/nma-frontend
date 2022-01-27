import React, { useEffect, useState } from "react";
import M from "materialize-css";

const Navbar = () => {
  const [token, setToken] = useState(false);

  const isToken = () => {
    return localStorage.getItem("token") === null;
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
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
      <nav className="light-blue lighten-1">
        <div className="nav-wrapper light-blue lighten-1 container">
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
              <a href="/">
                <i className="material-icons left">home</i>
                Home
              </a>
            </li>
            <li>
              <a href="/about-us">
                <i className="material-icons left">apartment</i>
                ¿Quienes Somos?
              </a>
            </li>
            {token ? (
              <li>
                <a href="/login">
                  <i className="material-icons left">login</i>
                  Login
                </a>
              </li>
            ) : (
              <>
                <li>
                  <a href="/profile">Perfil</a>
                </li>
                <li>
                  <a href="#!" onClick={logout}>
                    Logout
                    <i className="material-icons left">logout</i>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <ul className="sidenav " id="mobile-demo">
        <li>
          <a href="/">
            Home
            <i className="material-icons left">home</i>
          </a>
        </li>
        <li>
          <a href="/about-us">¿Quienes Somos?</a>
        </li>
        {token ? (
          <li>
            <a href="/login">Login</a>
          </li>
        ) : (
          <>
            <li>
              <a href="/profile">Perfil</a>
            </li>
            <li>
              <a href="#!">
                Logout
                <i className="material-icons left">logout</i>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
