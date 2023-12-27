import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BikeForm from "./BikeForm";
import axios from "axios";

function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bike, setBike] = useState(null);
  const [editingBike, setEditingBike] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);

      if (foundUser.bike && Object.keys(foundUser.bike).length !== 0) {
        setBike(foundUser.bike);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const submitBikeForm = (bikeData) => {
    let url = `https://54.92.163.60:3333/bike/`;
    let method = 'post';

    // Si estamos editando una bicicleta existente, añadimos el ID al cuerpo de la solicitud
    if (bike) {
      bikeData.id = bike.id;
      method = 'put';
    } // En caso contrario creamos una nueva bicicleta con el id del usuario
    else {
      bikeData.personId = user.person.id;
    }

    axios[method](url, bikeData)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        setBike(response.data.data);
        setEditingBike(false);
        const updatedUser = { ...user, bike: response.data.data };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      })
      .catch((error) => {
        console.error("Error al registrar/actualizar la bicicleta:", error);
        console.log("Datos enviados:", bikeData);
      });
  };

  const handleEditBike = () => {
    setEditingBike(true);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1 className="display-4 text-white mt-5 mb-3">
            Hola {user ? user.person.name : ""}
          </h1>
        </div>
      </div>
      {(!bike || editingBike) && (
        <BikeForm
          bikeData={bike || { brandName: "", model: "", color: "", accesories: ""}}
          submitBikeForm={submitBikeForm}
        />
      )}
      {bike && !editingBike && (
        <div className="row my-4">
          <div className="col-md-3 col-sm-12 mx-auto">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h3 className="card-title mb-3">Tu bici 🚲</h3>
                <p className="card-text">Marca: {bike.brandName}</p>
                <p className="card-text">Modelo: {bike.model}</p>
                <p className="card-text">Color: {bike.color}</p>
                <p className="card-text">Accesorios: {bike.accesories}</p>
                <button onClick={handleEditBike} className="btn btn-primary mt-3">
                  Modificar Bicicleta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeUser;
