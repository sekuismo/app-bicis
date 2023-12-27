import React, { useState } from "react";
import { useUser } from "../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Navbar() {
  //Guarderemos por mientras en un useState   estudiante -  administrador  - guardia
  const navigate = useNavigate();
  const { userType, setUserType } = useUser();
  // AQUÍ TENEMOS QUE CONSUMIR LA API QUE SERÁ ALMACENADA EN EL ESTADO GLOBAL PARA SETEAR EL TIPO DE USUARIO Y HACER EL RENDERIZADO CONDICIONAL
  const handleLogout = async () => {
    try {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);

        const config = {
          headers: {
            Authorization: `Bearer ${userData.authData.token}`,
          },
        };

        // Realiza la solicitud de cierre de sesión al servidor
        const response = await axios.get(
          "http://54.92.163.60:3333/auth/logout",
          config
        );

        // Imprimir la respuesta del servidor en la consola
        console.log("Respuesta del servidor al deslogueo:", response.data);
      }

      // Continuar con el cierre de sesión
      localStorage.removeItem("user");
      setUserType(null);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {!["Estudiante", "Guardia", "Administrador"].includes(userType) && (
            <a className="navbar-brand" href="/">
              Inicio
            </a>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {userType === "Estudiante" && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/homeUser">
                      Panel de Usuario{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/qrGenerator">
                      Estacionar
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={() => handleLogout()}>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              )}

              {userType === "guardia" && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/homeGuardia">
                      Panel de Guardia
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={() => handleLogout()}>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              )}

              {userType === "Administrador" && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/homeAdmin">
                      Panel de Administrador
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard">
                      Registro
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/qrGenerator">
                      Estacionar
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={() => handleLogout()}>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              )}

              {!["Estudiante", "Guardia", "Administrador"].includes(
                userType
              ) && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      Iniciar Sesión
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Registrarse
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
