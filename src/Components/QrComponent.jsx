import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';
import { SHA256 } from 'crypto-js';

function QrComponent() {
  const [qrCodeData, setQRCodeData] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [userName, setUserName] = useState('');

  const saveQrCode = async (qrCodeString, userId) => {
    try {
      await axios.post('http://localhost:3000/qrCodes', {
        userId: userId,
        qrCodeData: qrCodeString
      });
      console.log('Código QR almacenado en la base de datos.');
    } catch (error) {
      console.error('Error al almacenar el código QR:', error);
    }
  };

  const generateQRCode = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser && loggedInUser.id) {
      const userData = {
        userId: loggedInUser.id,
        token: SHA256(Math.random().toString()).toString().substring(0, 10),
        // Aquí puedes agregar más información relevante
      };
      console.log(userData.token);
      setUserName(loggedInUser.fullName || '');

      const qrCodeString = JSON.stringify(userData);
      setQRCodeData(qrCodeString);
      setShowMessage(true);
      setButtonVisible(false);
      saveQrCode(qrCodeString, loggedInUser.id);
    }
  };

  const qrCodeStyle = {
    width: 300,
    height: 300,
  };

  return (
    <div>
      <div className="container mx-auto my-auto ">
        <div className="row mx-auto my-auto">
          <div className="col text-center">
            <h1 className="display-3 text-center text-white m-2 mt-4">Guarda tu bicicleta 🚴‍♀️🚴‍♂️</h1>
          </div>
        </div>
        <div className="row">
          {buttonVisible && (
            <div className="col text-center">
              <button className="btn btn-primary" style={{ marginTop: "100px", fontSize: "150%" }} onClick={generateQRCode}>
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
              <p className='text-white'>Bienvenido/a {userName}</p>
              <p className='text-white'>Este es tu código QR para ingresar al estacionamiento.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QrComponent;
