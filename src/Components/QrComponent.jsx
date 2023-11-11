import { useState } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';
function QrComponent() {
    const [qrCodeData, setQRCodeData] = useState('');
    const generateQRCode = async () => {
        // Esta función genera el código QR para almacenarlo de pana 
        const userData = {
          // Información del usuario o cualquier otro dato necesario
          // para validar el QR del usuario posteriormente
          userId: '666 pasta',
          username: 'ejemplo',
        };
    
        const qrCodeString = JSON.stringify(userData);
        setQRCodeData(qrCodeString);
    
        // Lógica para almacenar el código QR en la base de datos
        try {
          await axios.post('URL_DE_TU_API_PARA_GUARDAR_QR', { qrCodeString });
          console.log('Código QR almacenado en la base de datos.');
        } catch (error) {
          console.error('Error al almacenar el código QR:', error);
        }
      };
      const qrCodeStyle = {
        width: '250', // Ajusta el ancho según tus necesidades
        height: '250px', // Ajusta la altura según tus necesidades
      };
  return (
    <div>
        <div className="container border">
            <div className="row">
                <div className="col  text-center">


                    <h1 className="display-2 text-center text-white ">QR Component</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className='btn btn-primary' onClick={generateQRCode}>Generar QR Code</button>

                </div>
            </div>
            <div className="row my-2">
                <div className="col text-center">
                    {qrCodeData && <QRCode value={qrCodeData} style={qrCodeStyle} />}

                </div>
            </div>
        </div>

    </div>
  )
}

export default QrComponent