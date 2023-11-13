import React from "react";

function Home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-5 text-white">
              Bienvenid@ a la revolución digital al servicio de los usuarios de
              ciclos
            </h1>
            <p className="text-white mt-5">
              Registra tu bicicleta y mantén un control digital de tu
              estacionamiento.
            </p>
          </div>
          <div className="col-md-6">
            {/* Aquí puedes agregar un formulario para que los usuarios registren sus bicicletas */}
          </div>
        </div>
      </div>
      <div className="fixed-bottom fixed-right m-4 p-3 ">
        <i className="bi bi-qr-code" style={{ fontSize: "2rem" }}></i>
      </div>
    </div>
  );
}

export default Home;
