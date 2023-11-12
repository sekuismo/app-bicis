import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useState, useEffect } from "react";
import axios from "axios";

function QRReaderComponent() {
  const [scanResult, setScanResult] = useState(null);
  const qrValidator = async () => {
    try {
      const response = await axios.post('URL_DEL_BACKEND', scanResult);

      // Manejar la respuesta del backend aquí
      console.log('Respuesta del backend:', response.data);
    } catch (error) {
      // Manejar errores aquí
      console.error('Error al enviar datos al backend:', error);
      console.log(`Los datos del qr  ${scanResult} han sido enviados al menos unu `)
      alert(`${scanResult}  funcionando ` )
    }
  };
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 10,
    });



    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      qrValidator()

    }
    function error(err) {
      console.warn(err);
    }
  }, []);
  let user = "usuario"

  // enviar datos al backend


  return (
    <div>

      <h1 className="text-white text-center display-3">bienvenido/a {user}  </h1> 
      {scanResult ? (
        <div>
          Success: <a href={"https://" + scanResult}>{scanResult}</a>{" "}
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="reader"></div>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default QRReaderComponent;
