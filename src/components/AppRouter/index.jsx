import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../404";
import AboutUs from "../AboutUs";
import Home from "../Home";
import Login from "../Login";
import Training from "../Professional/Training";
import CreateTraining from "../Professional/Training/CreateTraining";
import Profile from "../Profile";

const AppRouter = () => {
  const [token, setToken] = useState(false);

  const isToken = () => {
    return localStorage.getItem("token") === null;
  };

  const rol = localStorage.getItem("rol");

  const userRol = {
    2: (
      <>
        {/** rutas profesional */}
        <Route path="profile" element={<Profile />} />
        <Route path="professional" element={<Training />} exact />
        <Route path="professional/create-activity" element={<CreateTraining />} exact />
      </>
    ),
    3: (
      <>
        {/** rutas cliente */}
        <Route path="profile" element={<Profile />} exact />
      </>
    ),
  };

  useEffect(() => {
    setToken(isToken);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/** Rutas publicas */}
          <Route path="/" element={<Home />} exact />
          <Route path="about-us" element={<AboutUs />} exact />
          {/** Solo ver cuando no hay usuario conectado */}
          {token ? (
            <Route path="login" element={<Login />} exact />
          ) : (
            /** Rutas protegidas por usuario */
            userRol[rol]
          )}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
