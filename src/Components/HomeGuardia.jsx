import React from "react";
import { createContext, useState, useEffect } from "react";

function HomeGuardia() {
  const biciEnEstacionamiento = true;

  const guardia1 = {
    nombre: "Juan Díaz",
    genero: "M",
  };

  const guardia2 = {
    nombre: "Fidelisa Flores",
    genero: "F",
  };

  const guardia = guardia1;
  const cupos = 10;
  const dia = "jueves";
  const personas = 44;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-50px",
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center mt-0">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div
              className="card p-2 mt-5"
              style={{
                minWidth: "350px",
                maxWidth: "500px",
                backgroundColor: "#2B296B",
                color: "white",
              }}
            >
              <h5 className="text-center mb-2 mt-3">
                {guardia.genero === "M"
                  ? `¡Bienvenido ${guardia.nombre}!`
                  : `¡Bienvenida ${guardia.nombre}!`}
              </h5>
              <div
                className="card p-2 mt-3 mb-0"
                style={{
                  minWidth: "350px",
                  maxWidth: "500px",
                  backgroundColor: "#2A2248",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  className="text-center mb-0 mt-1"
                  style={{ fontSize: "95%", fontWeight: "bold" }}
                >
                  Módulo para guardias
                </p>
                <div className="text-center" style={{ fontSize: "100%", maxWidth: "500px" }}>
                  <div
                    className="card p-2 mb-1 mt-3"
                    style={{ backgroundColor: "#091953", color: "white" }}
                  >
                    <div style={{fontSize: "180%"}}>💂</div>
                    <a href="/dashboard2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                      style={{width: "250px", alignSelf: "center"}}
                    >
                      Ver usuarios activos
                    </button>
                    </a>
                    <a href="/qrReader">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4 mb-3"
                      style={{width: "250px", alignSelf: "center"}}
                    >
                      Revisar QR
                    </button>
                    </a>
                  </div>
                  <p className="mt-4">
                    En este momento hay {cupos} cupos disponibles en el bicicletero
                  </p>
                </div>
              </div>
                <div style={{fontSize: "180%", alignSelf: "center", marginBottom: "5px"}}>🚲</div>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="card p-4 mt-5"
              style={{
                minWidth: "350px",
                maxWidth: "500px",
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
                  minWidth: "350px",
                  maxWidth: "500px",
                  backgroundColor: "#2A2248",
                  color: "white",
                }}
              >
                <p className="text-left mb-2 mt-0">
                  ¡Esta semana {personas} personas usaron el estacionamiento! El día de
                  mayor uso fue el {dia}.
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

export default HomeGuardia;

// Retroalimentacion del usuario post ingreso (Bienvenido "nombre persona", también aparecer si su bici está dentro del inacap, última fecha de uso del estacionamiento, nombre del guardia que hizo la entrada de la bici, usando UseEffect que consuma la API para ver el nombre del usuario)

// Hacerlo como sports dashboard app, integrar estadisticas y usar paleta de colores del fondo. Usar template strings.
