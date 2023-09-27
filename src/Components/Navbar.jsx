import React from 'react'

function Navbar() {
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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Iniciar Sesión</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Registrarse</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
    </div>
  )
}

export default Navbar