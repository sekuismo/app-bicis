import React, { useState } from "react";
import { useUser } from "../Context";
import { useNavigate } from "react-router-dom";
function Navbar() {
  //Guarderemos por mientras en un useState   estudiante -  administrador  - guardia
  const navigate = useNavigate();
  const { userType, setUserType } = useUser();
  // AQUÍ TENEMOS QUE CONSUMIR LA API QUE SERÁ ALMACENADA EN EL ESTADO GLOBAL PARA SETEAR EL TIPO DE USUARIO Y HACER EL RENDERIZADO CONDICIONAL
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserType(null); // Si estás usando un estado global para el tipo de usuario
    navigate("/"); // Redirigir al home
  };

  return (
    <div>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {!["estudiante", "guardia", "administrador"].includes(userType) && (
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

              {userType === "Guardia" && (
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
