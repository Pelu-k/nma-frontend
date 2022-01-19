import React, { useEffect } from "react";
import M from "materialize-css";

const Navbar = () => {
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
              <a href="/quienes-somos">¿Quienes Somos?</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav " id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/quienes-somos">¿Quienes Somos?</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
