import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const Collection = () => {
  const [estado, setEstado] = useState(true);
  const [data, setData] = useState()

  const obtenerData =  async (idUsuario) => {
    const res = await fetch(`http://localhost:8080/api/professional/${idUsuario}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "appication/json",
        Authorization: localStorage.getItem("token"),
      }
    })
    const data = await res.json()
    setData(data)
  }

  const cambiarEstado = () => {
    setEstado(true)
    setTimeout(() => {
      setEstado(false)
    }, 3000)
  }

  useEffect(() => {
    obtenerData(localStorage.getItem("idUsuario"))
    cambiarEstado()
  }, [])

  const foto = data.foto | null;
  return (
    <>
      {estado ? (
        <Loading />
      ) : (
        <div>
          <ul className="collection">
            <li className="collection-item avatar">
              <img src={foto} alt="Foto de perfil" className="circle" />
              <span className="title">{data.nombre} {data.apellido}</span>
              <p>Rut: {data.rut}-{data.rutDv}</p>
              <p>Id: {data.idProfesional}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Collection;
