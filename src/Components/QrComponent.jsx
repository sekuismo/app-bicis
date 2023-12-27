import React, { useState } from "react";
import QRCode from "qrcode.react";
import axios from "axios";
import { SHA256 } from "crypto-js";

function QrComponent() {
  const [qrCodeData, setQRCodeData] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [userName, setUserName] = useState("");

  const saveQrCode = async (qrCodeString) => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      if (loggedInUser && loggedInUser.user && loggedInUser.user.id) {
        await axios.post("https://54.92.163.60:3333/qr/", {
          userId: loggedInUser.user.id.toString(),
          qrCodeData: qrCodeString,
        });
        console.log("Código QR enviado al backend.");
      }
    } catch (error) {
      console.error("Error al enviar el código QR al backend:", error);
    }
  };

  const generateQRCode = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser && loggedInUser.user && loggedInUser.user.id) {
      const userData = {
        userId: loggedInUser.user.id,
        token: SHA256(Math.random().toString()).toString().substring(0, 10),
      };
      console.log(userData.token);
      setUserName(loggedInUser.data.fullName || "");

      const qrCodeString = JSON.stringify(userData);
      setQRCodeData(qrCodeString);
      setShowMessage(true);
      setButtonVisible(false);
      saveQrCode(qrCodeString);
    }
  };

  const qrCodeStyle = {
    width: 300,
    height: 300,
    background: "white",
    padding: "16px",
  };

  return (
    <div className="container mx-auto my-auto">
      <div className="row mx-auto my-auto">
        <div className="col text-center">
          <h1 className="display-5 text-center text-white mb-4 mt-5">
            Guarda tu bicicleta 🚴‍♀️🚴‍♂️
          </h1>
        </div>
      </div>
      <div className="row">
        {buttonVisible && (
          <div className="col text-center">
            <button
              className="btn btn-primary"
              style={{ marginTop: "100px", fontSize: "150%" }}
              onClick={generateQRCode}
            >
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
            <p className="text-white">Bienvenido/a {userName}</p>
            <p className="text-white">
              Este es tu código QR para ingresar al estacionamiento.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default QrComponent;
