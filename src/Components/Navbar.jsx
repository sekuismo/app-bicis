import React, { useState } from 'react';

function Navbar() {
  //Guarderemos por mientras en un useState   estudiante -  administrador  - guardia
  const [userType, setUserType] = useState('administrador');

  // AQUÍ TENEMOS QUE CONSUMIR LA API QUE SERÁ ALMACENADA EN EL ESTADO GLOBAL PARA SETEAR EL TIPO DE USUARIO Y HACER EL RENDERIZADO CONDICIONAL
  const handleChangeUserType = (newUserType) => {
    setUserType(newUserType);
  };

  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {userType === 'estudiante' && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/homeUser">Panel de Usuario </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/qrGenerator">Estacionar</a>
                  </li>
                </>
              )}

              {userType === 'guardia' && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/homeGuardia">Panel de Guardia</a>
                  </li>
                </>
              )}

              {userType === 'administrador' && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/homeAdmin">Panel de Administrador</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard">Registro</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/qrGenerator">Estacionar</a>
                  </li>

                  
                </>
              )}

              {userType === 'desconectado' && (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login">Iniciar Sesión</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Registrarse</a>
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
