import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../404";
import AboutUs from "../AboutUs";
import Home from "../Home";
import Login from "../Login";
import Activity from "../Professional/Activity";
import CreateActivity from "../Professional/Activity/CreateActivity";
import AddActivity from "../Professional/Activity/CreateActivity/AddActivity";
import DeleteActivity from "../Professional/Activity/DeleteActivity";
import RemoveActivity from "../Professional/Activity/DeleteActivity/RemoveActivity";
import ReadActivity from "../Professional/Activity/ReadActivity";
import SeeActivity from "../Professional/Activity/ReadActivity/SeeActivity";
import UpdateActivity from "../Professional/Activity/UpdateActivity";
import Advisory from "../Professional/Advisory";
import CreateAdvisory from "../Professional/Advisory/CreateAdvisory";
import UpdateAdvisory from "../Professional/Advisory/UpdateAdvisory";
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
        <Route path="profile"                      element={<Profile />}        exact />
        <Route path="advisory"                     element={<Advisory />}       exact />
        <Route path="advisory/create-advisory"     element={<CreateAdvisory />} exact />
        <Route path="advisory/update-advisory"     element={<UpdateAdvisory />} exact />
        <Route path="activity"                     element={<Activity />}       exact />
        <Route path="activity/create-activity"     element={<CreateActivity />} exact />
        <Route path="activity/create-activity/:id" element={<AddActivity />}    exact />
        <Route path="activity/read-activity"       element={<ReadActivity />}   exact />
        <Route path="activity/read-activity/:id"   element={<SeeActivity />}    exact />
        <Route path="activity/update-activity"     element={<UpdateActivity />} exact />
        <Route path="activity/update-activity/:id" element={<UpdateActivity />} exact />
        <Route path="activity/delete-activity"     element={<DeleteActivity />} exact />
        <Route path="activity/delete-activity/:id" element={<RemoveActivity />} exact />
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
