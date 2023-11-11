import React from "react";

function HomeUser() {

  const biciEnBicicletero = true

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
        {biciEnBicicletero ? (<div className="row justify-content-center">
          <div
            className="card p-4 bg-light col-3"
            style={{ minWidth: "350px", maxWidth: "700px" }}
          >
            <h3 className="text-center mb-4">Bienvenid@ *nombre de usuario*</h3>
            <div className="card p-2 bg-light mb-4">
              <p className="text-left mb-4">
                <ul>
                  <li>Tu bici está en el bicicletero</li>
                  <li>Última fecha de uso del bicicletero: ?</li>
                  <li>Nombre del guardia que dió la entrada: ?</li>
                </ul>
              </p>
            </div>
          </div>
        </div>) : (<div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="card p-4 bg-light col-3"
            style={{ minWidth: "350px", maxWidth: "700px" }}
          >
            <h3 className="text-center mb-4">Bienvenid@ *nombre de usuario*</h3>
            <div className="card p-2 bg-light mb-4">
              <p className="text-left mb-4">
                <ul>
                  <li>Tu bici no está en el bicicletero</li>
                  <li>Aquí puedes reservar tu cupo para el bicicletero</li>
                  <li>Cupos disponibles: *cupos disponibles*</li>
                  <li>Última fecha de uso del bicicletero: ?</li>
                  <li>Nombre del guardia que dió la última salida: ?</li>
                </ul>
              </p>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Reservar cupo
            </button>
          </div>
        </div>
      </div>)}
      </div>
      
    </div>
  );
}

export default HomeUser;

// Retroalimentacion del usuario post ingreso (Bienvenido "nombre persona", también aparecer si su bici está dentro del inacap, última fecha de uso del bicicletero, nombre del guardia que hizo la entrada de la bici, usando UseEffect que consuma la API para ver el nombre del usuario)
