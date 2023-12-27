import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context";

function HomeAdmin() {
  const { setUserType } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserType(foundUser.type);
      // Aquí puedes realizar acciones adicionales dependiendo del tipo de usuario
      // Por ejemplo, cargar datos específicos del usuario o configurar permisos
    } else {
      // Si no hay un usuario logueado, redirigir a la página de inicio de sesión
      navigate('/login');
    }
  }, [navigate, setUserType]);
  const biciEnEstacionamiento = false;

  const admin1 = {
    nombre: "Juan Díaz",
    genero: "M",
  };

  const admin2 = {
    nombre: "Fidelisa Flores",
    genero: "F",
  };

  const entrada = {
    fecha: "12/11/2023",
    guardia: "Juanito",
  };

  const admin = admin2;

  const cupos = 10;

  return (
    <div
    >
      <div className="container-fluid">
        <div className="row justify-content-center mt-1">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div
              className="card p-2 mt-5"
              style={{
                backgroundColor: "#2B296B",
                color: "white",
              }}
            >
              <h5 className="text-center mb-2 mt-3">
                {`¡Bienvenid@ al módulo de administración de Bicinacap!`}
              </h5>
              <div
                className="card p-2 mt-3 mb-3"
                style={{
                  backgroundColor: "#2A2248",
                  color: "white",
                }}
              >
                <p
                  className="text-center mb-1 mt-3"
                  style={{ fontSize: "95%", fontWeight: "bold" }}
                >
                  Módulo de administración
                </p>
                <div className="text-center" style={{ fontSize: "100%" }}>
                  <div
                    className="card p-2 mb-2 mt-3"
                    style={{ backgroundColor: "#091953", color: "white" }}
                  >
                    <div style={{fontSize: "180%"}}>👨‍💼</div>
                    <a href="/dashboard">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                      style={{maxWidth: "250px", alignSelf: "center"}}
                    >
                      Registro de entradas y salidas
                    </button>
                    </a>
                    <a href="/dashboard2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                      style={{maxWidth: "250px", alignSelf: "center"}}
                    >
                      Monitoreo del estacionamiento
                    </button>
                    </a>
                    <a href="/registerGuardia">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4 mb-4"
                      style={{maxWidth: "250px", alignSelf: "center"}}
                    >
                      Crear cuenta de guardia
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="card p-4 mt-5 mb-5"
              style={{
                backgroundColor: "#2B296B",
                color: "white",
              }}
            >
              <h5 className="text-center mb-6">
                Estadísticas de uso del estacionamiento 🤓
              </h5>
              <div
                className="card p-3 mt-3"
                style={{
                  backgroundColor: "#2A2248",
                  color: "white",
                }}
              >
                <p className="text-left mb-2 mt-0">
                  ¡Esta semana 21 personas usaron el estacionamiento! El día de mayor uso fue el miércoles.
                </p>
                <div
                  className="card p-2 mb-0 mt-3"
                  style={{ backgroundColor: "#091953", color: "white" }}
                >
                  <p
                    className="text-center mb-2 mt-0 mb-0"
                    style={{ fontWeight: "bold" }}
                  >
                    Gráficos de uso:
                  </p>
                </div>
                <div
                  className="card p-4 mb-0 mt-3"
                  style={{ backgroundColor: "#091953", color: "white" }}
                >
                  <div className="text-center" style={{ fontSize: "100%" }}>
                    <p className="mb-3 mt-1" style={{ fontSize: "500%" }}>
                      📊📊📊
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;

// Retroalimentacion del usuario post ingreso (Bienvenido "nombre persona", también aparecer si su bici está dentro del inacap, última fecha de uso del estacionamiento, nombre del guardia que hizo la entrada de la bici, usando UseEffect que consuma la API para ver el nombre del usuario)

// Hacerlo como sports dashboard app, integrar estadisticas y usar paleta de colores del fondo. Usar template strings.
