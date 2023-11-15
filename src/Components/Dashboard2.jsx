import React, { useState, useEffect } from 'react';

function Dashboard2() {
  const [parkingData, setParkingData] = useState([]);

  // Aquí deberías hacer la llamada a tu API para obtener los datos
  useEffect(() => {
    // Simulamos datos de ejemplo ya que la API aún no está lista
    const mockData = [
      { user: 'Juan Pérez', entryTime: '2023-01-01T10:00:00Z', assignedEntryGuard: 'Guardia1'},
      { user: 'María Gómez', entryTime: '2023-01-01T11:30:00Z', assignedEntryGuard: 'Guardia2'},
      { user: 'Pedro Rodriguez', entryTime: '2023-01-01T09:15:00Z', assignedEntryGuard: 'Guardia1'},
      { user: 'Ana Martínez', entryTime: '2023-01-01T14:00:00Z', assignedEntryGuard: 'Guardia2'},
      { user: 'José Sánchez', entryTime: '2023-01-01T13:45:00Z', assignedEntryGuard: 'Guardia1', },
    ];

    setParkingData(mockData);
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
            <th>Hora de entrada</th>
            <th>Guardia entrada</th>
          </tr>
        </thead>
        <tbody>
          {parkingData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user}</td>
              <td>{formatTime(entry.entryTime)}</td>
              <td>{entry.assignedEntryGuard}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-white text-end' style={{fontWeight: "bold"}}>Cupos disponibles: {10 - parkingData.length}</p>
    </div>
  );
}

export default Dashboard2;
