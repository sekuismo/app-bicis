import React from 'react'

function Login() {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 bg-light" style={{ minWidth: '350px' }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Recordar sesión
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Iniciar Sesión
          </button>
        </form>
        <hr />
        <p className="text-center mb-0">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        
      </div>
    </div>
    </div>
  )
}

export default Login