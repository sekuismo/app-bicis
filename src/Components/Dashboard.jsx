import React, { useState, useEffect } from 'react';
import axios from "axios";

function Dashboard() {
  const [parkingData, setParkingData] = useState([]);
  const [parkingSlots, setParkingSlots] = useState(0);

  // Aquí deberías hacer la llamada a tu API para obtener los datos
  useEffect(() => {
    // Simulamos datos de ejemplo ya que la API aún no está lista

    const getData = async () => {
      const response = await axios.get("https://54.92.163.60:3333/control/");
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
              outDate: element?.outDate,
            };
          });
          setParkingData(sanitizedData);
        }
      }
    }

    getData();
  }, []);

  const formatTime = (timestamp) => {
    if (timestamp){
      const date = new Date(timestamp);
      return date.toLocaleString();
    }
    return 'Sin salida registrada';
  };

  return (
    <div className="container">
      <h3 className="display-3 text-white text-center mt-3 ">Registro del estacionamiento</h3>

      {/* Muestra la cantidad de estacionamientos disponibles (simulado) */}
      <p className='text-white text-end ' >Estacionamientos disponibles: {parkingSlots}</p>

      {/* Tabla para mostrar los detalles */}
      <table className="table table-bordered table-striped mt-2">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Bicicleta</th>
            <th>Color</th>
            <th>Hora de entrada</th>
            <th>Hora de salida</th>
            <th>Guardia control</th>
          </tr>
        </thead>
        <tbody>
          {/* AQUÍ ESTAMOS SIMULANDO UN MAP A LO CONSUMIDO DE LA API */}
          {parkingData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user}</td>
              <td>{entry.bike}</td>
              <td>{entry.color}</td>
              <td>{formatTime(entry.inDate)}</td>
              <td>{formatTime(entry.outDate)}</td>
              <td>{entry.assignedGuard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
