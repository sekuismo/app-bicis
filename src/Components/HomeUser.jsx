import React from "react";
import { createContext, useState, useEffect } from "react";

function HomeUser() {
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
        {biciEnEstacionamiento ? (
          <div className="row justify-content-center mt-5">
            <div className="col-md-1"></div>
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
                <h4 className="text-center mb-6">
                  {user.genero === "M"
                    ? `¡Bienvenido ${user.nombre}!`
                    : `¡Bienvenida ${user.nombre}!`}
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
                  <p className="text-center mb-2 mt-0 mb-1">
                    ¡Tu bici está en el estacionamiento!
                  </p>
                  <div
                    className="card p-4 mb-1 mt-3"
                    style={{ backgroundColor: "#091953", color: "white" }}
                  >
                    <div className="text-center" style={{ fontSize: "100%" }}>
                      <p className="mb-1 mt-1" style={{ fontSize: "200%" }}>
                        😄🚲
                      </p>
                      <div
                        className="card border-dark border-3 p-4 mb-1 mt-4"
                        style={{
                          backgroundColor: "#0C0A0C",
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        <p className="mb-1 mt-1">
                          Última fecha de uso del estacionamiento:
                        </p>
                        <p className="mb-1 mt-2" style={{ fontWeight: "bold" }}>
                          {entrada.fecha}
                        </p>
                        <p className="mb-1 mt-3">
                          Nombre del guardia que dió la entrada:
                        </p>
                        <p className="mb-0 mt-2" style={{ fontWeight: "bold" }}>
                          {entrada.guardia}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  className="card p-4 mt-3"
                  style={{
                    minWidth: "350px",
                    maxWidth: "500px",
                    backgroundColor: "#2A2248",
                    color: "white",
                  }}
                >
                  <p className="text-left mb-2 mt-0 mb-1">
                    ¡Esta semana usaste el estacionamiento durante un total de{" "}
                    {user1.horas} horas!
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
                    <p>
                      El día en el que usaste el estacionamiento por mas tiempo
                      fue el {user.dia}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row justify-content-center mt-5">
              <div className="col-md-1"></div>
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
                  <h4
                    className="text-center mb-6"
                    style={{ fontWeight: "bold" }}
                  >
                    {user.genero === "M"
                      ? `¡Bienvenido ${user.nombre}!`
                      : `¡Bienvenida ${user.nombre}!`}
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
                    <div
                      className="text-left mb-0"
                      style={{ fontSize: "100%" }}
                    >
                      <p style={{ fontWeight: "bold", textAlign: "center" }}>
                        Tu bici no está en el estacionamiento actualmente
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
                          Aquí puedes reservar tu cupo para el estacionamiento
                          😄
                        </p>
                      </div>
                      <div
                        className="card p-4 mb-0 mt-4"
                        style={{
                          backgroundColor: "#091953",
                          color: "white",
                          fontSize: "90%",
                        }}
                      >
                        <p style={{ fontWeight: "bold" }}>
                          *Cupos disponibles: {cupos}
                        </p>
                        <p>
                          Última fecha de uso del estacionamiento:{" "}
                          {entrada.fecha}
                        </p>
                        <p>
                          Nombre del guardia que dió la última salida:{" "}
                          {entrada.guardia}
                        </p>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          fontSize: "200%",
                          marginTop: "0px",
                          marginBottom: "-5px",
                        }}
                      >
                        🚲
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Reservar cupo
                  </button>
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
                    className="card p-4 mt-3"
                    style={{
                      minWidth: "350px",
                      maxWidth: "500px",
                      backgroundColor: "#2A2248",
                      color: "white",
                    }}
                  >
                    <div
                      className="card p-1 mb-0 mt-0"
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
                        ¡Esta semana usaste el estacionamiento durante un total
                        de {user1.horas} horas!
                      </p>
                    </div>
                    <p
                      className="text-center mb-2 mt-4 mb-1"
                      style={{ fontWeight: "bold" }}
                    >
                      Gráficos de uso:
                    </p>
                    <div
                      className="card p-4 mb-0 mt-3"
                      style={{ backgroundColor: "#091953", color: "white" }}
                    >
                      <div className="text-center" style={{ fontSize: "100%" }}>
                        <p className="mb-3 mt-1" style={{ fontSize: "350%" }}>
                          📊📊📊
                        </p>
                      </div>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "90%",
                          marginTop: "7px",
                          fontWeight: "bold",
                        }}
                      >
                        El día en el que usaste el estacionamiento por mas
                        tiempo fue el {user.dia}
                      </p>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "200%",
                        marginTop: "10px",
                        marginBottom: "-10px",
                      }}
                    >
                      🚲
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeUser;

// Retroalimentacion del usuario post ingreso (Bienvenido "nombre persona", también aparecer si su bici está dentro del inacap, última fecha de uso del estacionamiento, nombre del guardia que hizo la entrada de la bici, usando UseEffect que consuma la API para ver el nombre del usuario)

// Hacerlo como sports dashboard app, integrar estadisticas y usar paleta de colores del fondo. Usar template strings.
