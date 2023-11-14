import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { createContext, useState, useEffect } from "react";

function ReservarEstacionamiento() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);

  const biciEnEstacionamiento = false;

  const hoursOptions = [
    { value: "09:00", label: "09:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "15:00", label: "03:00 PM" },
    // Add more options as needed
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourChange = (selectedOption) => {
    setSelectedHour(selectedOption);
  };

  const user1 = {
    nombre: "Marcianito",
    genero: "M",
    horas: 6,
    dia: "jueves",
  };

  const user2 = {
    nombre: "Valentina",
    genero: "F",
    horas: 10,
    dia: "viernes",
  };

  const entrada = {
    fecha: "12/11/2023",
    guardia: "Juanito",
  };

  const user = user1;

  const cupos = 0;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-100px",
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div
              className="card p-4 mt-5"
              style={{
                minWidth: "800px",
                maxWidth: "1000px",
                maxHeightt: "800px",
                backgroundColor: "#2B296B",
                color: "white",
              }}
            >
              <h4 className="text-center mb-6" style={{ fontWeight: "bold" }}>
                Reservar un cupo 🚲😄
              </h4>
              <div
                className="card p-4 mt-3"
                style={{
                  minWidth: "600px",
                  maxWidth: "800px",
                  backgroundColor: "#2A2248",
                  color: "white",
                }}
              >
                <div className="text-left mb-0" style={{ fontSize: "100%" }}>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    Selecciona fecha y hora:
                  </p>
                  <div
                    className="card p-0 mb-0 mt-4"
                    style={{
                      backgroundColor: "#091953",
                      color: "white",
                      fontSize: "90%",
                      maxHeight: "300px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontSize: "110%",
                      }}
                    >
                      Fecha:{" "}
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                      />{" "} <hr />
                      Hora:{" "}
                      <Select
                        options={hoursOptions}
                        value={selectedHour}
                        onChange={handleHourChange}
                      />
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-4">
                Reservar cupo
              </button>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default ReservarEstacionamiento;
