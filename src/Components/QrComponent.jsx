import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';
import { SHA256 } from 'crypto-js';

function QrComponent() {
  const [qrCodeData, setQRCodeData] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [userName,setUserName] = useState('')

  const saveQrCode = async (qrCodeString) => {
    // aquí se enviará al back end
    try {
      await axios.post('URL_DE_TU_API_PARA_GUARDAR_QR', { qrCodeString });
      console.log('Código QR almacenado en la base de datos.');
    } catch (error) {
      console.error('Error al almacenar el código QR:', error);
    }
  };

  useEffect(() => {
    // Este efecto se ejecutará cada vez que qrCodeData cambie
    if (qrCodeData) {
      saveQrCode(qrCodeData);
      setButtonVisible(false); // Ocultar el botón después de generar el código QR
    }
  }, [qrCodeData]);
  const generateQRCode = async () => {
    // Esta función genera el código QR para almacenarlo
    const userData = {
      userId: 'Esteban Muñoz',
      token: SHA256(Math.random().toString()).toString().substring(0, 10), // Genera un token simple
    };
    console.log(userData.token)
    setUserName(userData.userId)

    const qrCodeString = JSON.stringify(userData);
    setQRCodeData(qrCodeString);
    setShowMessage(true); // Mostrar el mensaje después de generar el código QR
  };

  const qrCodeStyle = {
    width: 300, // Ajusta el ancho según tus necesidades
    height: 300,
    marginTop: "10px", // Ajusta la altura según tus necesidades
    marginBottom: "10px" // Ajusta la altura según tus necesidades
  };

  return (
    <div>
      <div className="container mx-auto my-auto ">
        <div className="row mx-auto my-auto">
          <div className="col text-center">
            <h1 className="display-3 text-center text-white m-2 mt-4">Guarda tu bicicleta 🚴‍♀️🚴‍♂️ </h1>
          </div>
        </div>
        <div className="row">
          {buttonVisible && (
            <div className="col text-center">
              <button className="btn btn-primary" style={{marginTop: "100px", fontSize: "150%"}} onClick={generateQRCode}>
                Generar QR Code
              </button>
            </div>
          )}
        </div>
        <div className="row my-2">
          <div className="col text-center">
            {qrCodeData && <QRCode value={qrCodeData} style={qrCodeStyle} />}
          </div>
        </div>

        {showMessage && (
          <div className="row">
            <div className="col text-center">
              <p className='text-white' >Bienvenido/a {userName}</p>
              <p className='text-white'>Este es tu código QR para ingresar al estacionamiento.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QrComponent;
