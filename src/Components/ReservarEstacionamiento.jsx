import React from "react";
import { createContext, useState, useEffect } from "react";

function ReservarEstacionamiento() {
  const biciEnEstacionamiento = false;

  const user1 = {
    nombre: "Marcianito",
    genero: "M",
    horas: 6,
    dia: "jueves",
  };

  const user2 = {
    nombre: "Valentina",
    genero: "F",
    horas: 10,
    dia: "viernes",
  };

  const entrada = {
    fecha: "12/11/2023",
    guardia: "Juanito",
  };

  const user = user1;

  const cupos = 10;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-100px",
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4"></div>
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
              <h4 className="text-center mb-6" style={{ fontWeight: "bold" }}>
                Reservas
              </h4>
              <div
                className="card p-4 mt-3"
                style={{
                  minWidth: "350px",
                  maxWidth: "500px",
                  backgroundColor: "#2A2248",
                  color: "white",
                }}
              >
                <div className="text-left mb-0" style={{ fontSize: "100%" }}>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    Selecciona fecha y hora:
                  </p>
                  <div
                    className="card p-0 mb-0 mt-4"
                    style={{
                      backgroundColor: "#091953",
                      color: "white",
                      fontSize: "90%",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontSize: "110%",
                      }}
                    >
                      Fecha: ********* Hora: *********
                    </p>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-4">
                Reservar cupo
              </button>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default ReservarEstacionamiento;
