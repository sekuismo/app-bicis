import React from 'react'

function RegisterGuardia() {
  return (
    <div>
<div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
  <div className="card p-4 bg-light w-100" style={{ maxWidth: '400px' }}>
    <h3 className="text-center mb-4">Crear cuenta de guardia</h3>
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Ingresa tu dirección de correo electrónico"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Nombre completo:
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Ingresa tu nombre completo"
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
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirmar contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirma tu contraseña"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Crear cuenta
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default RegisterGuardia