import React, { useState, useEffect } from "react";
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";

function QRReaderComponent() {
  const [scanResult, setScanResult] = useState(null);
  const [bikeControl, setBikeControl] = useState({});
  const [user, setUser] = useState("Juan Díaz"); // Asumiendo que 'user' pueda cambiar.

  const qrValidator = async (qrData) => {
    try {
      const response = await axios.post('https://54.92.163.60:3333/control/scan', qrData);
      console.log('Respuesta del backend:', response.data);
      alert('Datos del QR enviados con éxito');
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
      alert('Error al enviar datos del QR');
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      facingMode: 'user',
      qrbox: { width: 250, height: 250 },
      fps: 10,
    });

    const onScanSuccess = (decodedText, decodedResult) => {
      scanner.clear();
      try {
        const qrData = JSON.parse(decodedText);
        setScanResult(qrData);
        qrValidator(qrData);
      } catch (error) {
        console.error('Error al procesar los datos del QR:', error);
        alert('Error al procesar los datos del QR');
      }
    };

    const onScanError = (error) => {
      console.warn('Error de escaneo:', error);
    };

    scanner.render(onScanSuccess, onScanError);
    return () => scanner.clear();
  }, []);

  return (
    <div>
      <h1 className="text-white text-center display-3 mb-5 mt-4">Bienvenido/a {user}</h1>
      {scanResult ? (
        <div>
          <p>Resultado del Escaneo: {JSON.stringify(scanResult)}</p>
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
