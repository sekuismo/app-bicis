import React, { useState, useEffect } from 'react';
import axios from "axios";

function Dashboard2() {
  const [parkingData, setParkingData] = useState([]);
  const [parkingSlots, setParkingSlots] = useState(0);

  // Aquí deberías hacer la llamada a tu API para obtener los datos
  useEffect(() => {
    // Simulamos datos de ejemplo ya que la API aún no está lista
    const getData = async () => {
      const response = await axios.get("https://54.92.163.60:3333/control/used");
      const responseParking = await axios.get("https://54.92.163.60:3333/parking-slot/1");

      const { data, status } = response;

      if (responseParking?.status === 200){
        if(responseParking?.data?.status === 0 && responseParking?.data?.data !== undefined ){
          const availableSlots = responseParking?.data?.data?.availableSlots ?? 0;
          setParkingSlots(availableSlots);
        }
      }

      if (status === 200) {
        if (data.data.length > 0) {
          const sanitizedData = data.data.map((element) => {
            return {
              user: element?.owner?.fullName,
              bike: `${element?.bike?.brand} ${element?.bike?.model} `,
              color: element?.bike?.color,
              assignedGuard: element?.guardControl?.fullName,
              inDate: element?.inDate,
            };
          });
          setParkingData(sanitizedData);
        }
      }
    }

    getData();
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <div className="container">
      <h3 className="mt-4 display-3 text-white text-center ">Monitoreo del estacionamiento</h3>

      <h6 className="text-white text-center mt-4 mb-5">Los siguientes usuarios están ocupando el estacionamiento actualmente:</h6>

      <table className="table table-bordered table-striped mt-4 mb-4">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Bicicleta</th>
            <th>Color</th>
            <th>Hora de entrada</th>
            <th>Guardia control</th>
          </tr>
        </thead>
        <tbody>
          {parkingData.map((entry, index) => (
            <tr key={index}>
            <td>{entry.user}</td>
            <td>{entry.bike}</td>
            <td>{entry.color}</td>
            <td>{formatTime(entry.inDate)}</td>
            <td>{entry.assignedGuard}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-white text-end' style={{fontWeight: "bold"}}>Cupos disponibles: {parkingSlots}</p>
    </div>
  );
}

export default Dashboard2;
