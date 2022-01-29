import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:8080/api/login";
  const options = {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const login = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("El campo nombre de usuario no puede estar vacio");
      return;
    }
    if (!password.trim()) {
      alert("La campo contraseña no puede estar vacio");
      return;
    }

    try {
      localStorage.clear();
      const res = await fetch(url, options);
      const data = await res.json()
      console.log(data);
      localStorage.setItem('token', data.token)
      localStorage.setItem('rol', data.rol)
      localStorage.setItem('idProfesional', data.idProfesional)
      window.location.replace("/profile")
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col m2 l2"></div>
        <form>
          <div className="card col s12 m8 l8">
            <div className="row">
              <div className="card-content">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="username">Usermane</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">password</i>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card-action">
                <button
                  className="btn right light-blue lighten-1"
                  onClick={login}
                >
                  Login
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="col m2 l2"></div>
      </div>
    </div>
  );
};

export default LoginForm;
