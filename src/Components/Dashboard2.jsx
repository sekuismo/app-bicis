import React, { useState, useEffect } from 'react';

function Dashboard2() {
  const [parkingData, setParkingData] = useState([]);

  // Aquí deberías hacer la llamada a tu API para obtener los datos
  useEffect(() => {
    // Simulamos datos de ejemplo ya que la API aún no está lista
    const mockData = [
      { user: 'Juan Pérez', entryTime: '2023-01-01T10:00:00Z', exitTime: '2023-01-01T13:30:00Z', assignedEntryGuard: 'Guardia1', assignedExitGuard: 'Guardia2' },
      { user: 'María Gómez', entryTime: '2023-01-01T11:30:00Z', exitTime: '2023-01-01T14:45:00Z', assignedEntryGuard: 'Guardia2', assignedExitGuard: 'Guardia1' },
      { user: 'Pedro Rodriguez', entryTime: '2023-01-01T09:15:00Z', exitTime: '2023-01-01T12:45:00Z', assignedEntryGuard: 'Guardia1', assignedExitGuard: 'Guardia2' },
      { user: 'Ana Martínez', entryTime: '2023-01-01T14:00:00Z', exitTime: '2023-01-01T17:30:00Z', assignedEntryGuard: 'Guardia2', assignedExitGuard: 'Guardia1' },
      { user: 'José Sánchez', entryTime: '2023-01-01T13:45:00Z', exitTime: '2023-01-01T17:00:00Z', assignedEntryGuard: 'Guardia1', assignedExitGuard: 'Guardia2' },
      { user: 'Laura Fernández', entryTime: '2023-01-01T12:30:00Z', exitTime: '2023-01-01T15:45:00Z', assignedEntryGuard: 'Guardia2', assignedExitGuard: 'Guardia1' },
      { user: 'Carlos López', entryTime: '2023-01-01T15:15:00Z', exitTime: '2023-01-01T18:30:00Z', assignedEntryGuard: 'Guardia1', assignedExitGuard: 'Guardia2' },
      { user: 'Sofía Ramírez', entryTime: '2023-01-01T09:30:00Z', exitTime: '2023-01-01T12:15:00Z', assignedEntryGuard: 'Guardia2', assignedExitGuard: 'Guardia1' },
      { user: 'Alejandro Torres', entryTime: '2023-01-01T14:45:00Z', exitTime: '2023-01-01T17:45:00Z', assignedEntryGuard: 'Guardia1', assignedExitGuard: 'Guardia2' },
      { user: 'Carmen González', entryTime: '2023-01-01T13:00:00Z', exitTime: '2023-01-01T16:00:00Z', assignedEntryGuard: 'Guardia2', assignedExitGuard: 'Guardia1' },
      // Agrega más datos según sea necesario
    ];

    setParkingData(mockData);
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <div className="container">
      <h3 className="display-3 text-white text-center ">Registro del estacionamiento</h3>

      {/* Muestra la cantidad de estacionamientos disponibles (simulado) */}
      <p className='text-white text-end ' >Estacionamientos disponibles: {10 - parkingData.length}</p>

      {/* Tabla para mostrar los detalles */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Hora de entrada</th>
            <th>Hora de salida</th>
            <th>Guardia entrada</th>
            <th>Guardia salida</th>
          </tr>
        </thead>
        <tbody>
          {parkingData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user}</td>
              <td>{formatTime(entry.entryTime)}</td>
              <td>{formatTime(entry.exitTime)}</td>
              <td>{entry.assignedEntryGuard}</td>
              <td>{entry.assignedExitGuard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard2;
