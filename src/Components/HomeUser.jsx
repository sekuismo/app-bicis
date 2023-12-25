// HomeUser.js
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
      if (foundUser.bicicleta) {
        setBike(foundUser.bicicleta);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const submitBikeForm = (bikeData) => {
    // Actualizar el registro completo del usuario con la nueva información de la bicicleta
    axios
      .put(`http://localhost:3000/users/${user.id}`, {
        ...user, // Mantener la información existente del usuario
        bicicleta: bikeData, // Actualizar o agregar la información de la bicicleta
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setBike(response.data.bicicleta);
        setEditingBike(false);
      })
      .catch((error) => console.error(error));
  };

  const handleEditBike = () => {
    setEditingBike(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4 text-white">
            Hola {user ? user.fullName : ""}
          </h1>
        </div>
      </div>
      {user && !bike && !editingBike && (
        <BikeForm
          bikeData={{ brand_name: "", model: "", color: "", accessories: "" }}
          submitBikeForm={submitBikeForm}
        />
      )}
      {user && bike && !editingBike && (
        <div className="row my-4">
          <div className="col-md-3 col-sm-12">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h3 className="card-title">Tu bici 🚲</h3>
                <p className="card-text">Marca: {bike.brand_name}</p>
                <p className="card-text">Modelo: {bike.model}</p>
                <p className="card-text">Color: {bike.color}</p>
                <p className="card-text">Accesorios: {bike.accessories}</p>
                <button onClick={handleEditBike} className="btn btn-primary">
                  Modificar Bicicleta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {editingBike && (
        <BikeForm bikeData={bike} submitBikeForm={submitBikeForm} />
      )}
    </div>
  );
}

export default HomeUser;

// import React from "react";
// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../Context";
// function HomeUser() {
//   const { setUserType } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUserType(foundUser.type);
//       // Aquí puedes realizar acciones adicionales dependiendo del tipo de usuario
//       // Por ejemplo, cargar datos específicos del usuario o configurar permisos
//     } else {
//       // Si no hay un usuario logueado, redirigir a la página de inicio de sesión
//       navigate("/login");
//     }
//   }, [navigate, setUserType]);
//   const biciEnEstacionamiento = false;
//   const reserva = true;

//   const user1 = {
//     nombre: "Marcianito",
//     genero: "M",
//     horas: 6,
//     dia: "jueves",
//   };

//   const user2 = {
//     nombre: "Valentina",
//     genero: "F",
//     horas: 10,
//     dia: "viernes",
//   };

//   const entrada1 = {
//     fecha: "12/11/2023",
//     guardia: "Juanito",
//   };

//   const entrada2 = {
//     fecha: "10/11/2023",
//     guardia: "Pedrito",
//   };

//   const user = user2;
//   const entrada = entrada1;

//   const cupos = 0;

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         marginTop: "-100px",
//       }}
//     >
//       <div className="container-fluid">
//         {biciEnEstacionamiento ? (
//           <div className="row justify-content-center mt-5">
//             <div className="col-md-1"></div>
//             <div className="col-md-5">
//               <div
//                 className="card p-4 mt-5"
//                 style={{
//                   minWidth: "350px",
//                   maxWidth: "500px",
//                   backgroundColor: "#2B296B",
//                   color: "white",
//                 }}
//               >
//                 <h4 className="text-center mb-6">
//                   {user.genero === "M"
//                     ? `¡Bienvenido ${user.nombre}!`
//                     : `¡Bienvenida ${user.nombre}!`}
//                 </h4>
//                 <div
//                   className="card p-4 mt-3"
//                   style={{
//                     minWidth: "350px",
//                     maxWidth: "500px",
//                     backgroundColor: "#2A2248",
//                     color: "white",
//                   }}
//                 >
//                   <p className="text-center mb-2 mt-0 mb-1">
//                     ¡Tu bici está en el estacionamiento!
//                   </p>
//                   <div
//                     className="card p-4 mb-1 mt-3"
//                     style={{ backgroundColor: "#091953", color: "white" }}
//                   >
//                     <div className="text-center" style={{ fontSize: "100%" }}>
//                       <p className="mb-1 mt-1" style={{ fontSize: "200%" }}>
//                         😄🚲
//                       </p>
//                       <div
//                         className="card border-dark border-3 p-4 mb-1 mt-4"
//                         style={{
//                           backgroundColor: "#0C0A0C",
//                           color: "white",
//                           textAlign: "left",
//                         }}
//                       >
//                         <p className="mb-1 mt-1">
//                           Última fecha de uso del estacionamiento:
//                         </p>
//                         <p className="mb-1 mt-2" style={{ fontWeight: "bold" }}>
//                           {entrada.fecha}
//                         </p>
//                         <p className="mb-1 mt-3">
//                           Nombre del guardia que dió la entrada:
//                         </p>
//                         <p className="mb-0 mt-2" style={{ fontWeight: "bold" }}>
//                           {entrada.guardia}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-5">
//               <div
//                 className="card p-4 mt-5"
//                 style={{
//                   minWidth: "350px",
//                   maxWidth: "500px",
//                   backgroundColor: "#2B296B",
//                   color: "white",
//                 }}
//               >
//                 <h5 className="text-center mb-6">
//                   Estadísticas de uso del estacionamiento 🤓
//                 </h5>
//                 <div
//                   className="card p-4 mt-3"
//                   style={{
//                     minWidth: "350px",
//                     maxWidth: "500px",
//                     backgroundColor: "#2A2248",
//                     color: "white",
//                   }}
//                 >
//                   <p className="text-left mb-2 mt-0 mb-1">
//                     ¡Esta semana usaste el estacionamiento durante un total de{" "}
//                     {user.horas} horas!
//                   </p>
//                   <div
//                     className="card p-2 mb-0 mt-3"
//                     style={{ backgroundColor: "#091953", color: "white" }}
//                   >
//                     <p
//                       className="text-center mb-2 mt-0 mb-0"
//                       style={{ fontWeight: "bold" }}
//                     >
//                       Gráficos de uso:
//                     </p>
//                   </div>
//                   <div
//                     className="card p-4 mb-0 mt-3"
//                     style={{ backgroundColor: "#091953", color: "white" }}
//                   >
//                     <div className="text-center" style={{ fontSize: "100%" }}>
//                       <p className="mb-3 mt-1" style={{ fontSize: "500%" }}>
//                         📊📊📊
//                       </p>
//                     </div>
//                     <p>
//                       El día en el que usaste el estacionamiento por mas tiempo
//                       fue el {user.dia}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-1"></div>
//           </div>
//         ) : !reserva ? (
//           <div className="container-fluid">
//             <div className="row justify-content-center mt-5">
//               <div className="col-md-1"></div>
//               <div className="col-md-5">
//                 <div
//                   className="card p-4 mt-5"
//                   style={{
//                     minWidth: "350px",
//                     maxWidth: "500px",
//                     backgroundColor: "#2B296B",
//                     color: "white",
//                   }}
//                 >
//                   <h4
//                     className="text-center mb-6"
//                     style={{ fontWeight: "bold" }}
//                   >
//                     {user.genero === "M"
//                       ? `¡Bienvenido ${user.nombre}!`
//                       : `¡Bienvenida ${user.nombre}!`}
//                   </h4>
//                   <div
//                     className="card p-4 mt-3"
//                     style={{
//                       minWidth: "350px",
//                       maxWidth: "500px",
//                       backgroundColor: "#2A2248",
//                       color: "white",
//                     }}
//                   >
//                     <div
//                       className="text-left mb-0"
//                       style={{ fontSize: "100%" }}
//                     >
//                       <p style={{ fontWeight: "bold", textAlign: "center" }}>
//                         Tu bici no está en el estacionamiento actualmente
//                       </p>
//                       <div
//                         className="card p-0 mb-0 mt-4"
//                         style={{
//                           backgroundColor: "#091953",
//                           color: "white",
//                           fontSize: "90%",
//                         }}
//                       >
//                         <p
//                           style={{
//                             textAlign: "center",
//                             marginTop: "10px",
//                             marginBottom: "10px",
//                             fontSize: "110%",
//                           }}
//                         >
//                           Aquí puedes reservar tu cupo para el estacionamiento
//                           😄
//                         </p>
//                       </div>
//                       <div
//                         className="card p-4 mb-0 mt-4"
//                         style={{
//                           backgroundColor: "#091953",
//                           color: "white",
//                           fontSize: "90%",
//                         }}
//                       >
//                         <p style={{ fontWeight: "bold" }}>
//                           {cupos > 0
//                             ? `Cupos disponibles: ${cupos}`
//                             : "No hay cupos disponibles 🙁"}
//                         </p>
//                         <p>
//                           Última fecha de uso del estacionamiento:{" "}
//                           {entrada.fecha}
//                         </p>
//                         <p>
//                           Nombre del guardia que dió la última salida:{" "}
//                           {entrada.guardia}
//                         </p>
//                       </div>
//                       <div
//                         style={{
//                           textAlign: "center",
//                           fontSize: "200%",
//                           marginTop: "0px",
//                           marginBottom: "-5px",
//                         }}
//                       >
//                         🚲
//                       </div>
//                     </div>
//                   </div>
//                   {cupos > 0 ? (
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block mt-4"
//                     >
//                       Reservar cupo
//                     </button>
//                   ) : (
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block mt-4"
//                       disabled
//                       style={{ backgroundColor: "grey" }}
//                     >
//                       Reservar cupo
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="col-md-5">
//                 <div
//                   className="card p-4 mt-5"
//                   style={{
//                     minWidth: "350px",
//                     maxWidth: "500px",
//                     backgroundColor: "#2B296B",
//                     color: "white",
//                   }}
//                 >
//                   <h5 className="text-center mb-6">
//                     Estadísticas de uso del estacionamiento 🤓
//                   </h5>
//                   <div
//                     className="card p-4 mt-3"
//                     style={{
//                       minWidth: "350px",
//                       maxWidth: "500px",
//                       backgroundColor: "#2A2248",
//                       color: "white",
//                     }}
//                   >
//                     <div
//                       className="card p-1 mb-0 mt-0"
//                       style={{
//                         backgroundColor: "#091953",
//                         color: "white",
//                         fontSize: "90%",
//                       }}
//                     >
//                       <p
//                         style={{
//                           textAlign: "center",
//                           marginTop: "10px",
//                           marginBottom: "10px",
//                           fontSize: "110%",
//                         }}
//                       >
//                         ¡Esta semana usaste el estacionamiento durante un total
//                         de {user.horas} horas!
//                       </p>
//                     </div>
//                     <p
//                       className="text-center mb-2 mt-4 mb-1"
//                       style={{ fontWeight: "bold" }}
//                     >
//                       Gráficos de uso:
//                     </p>
//                     <div
//                       className="card p-4 mb-0 mt-3"
//                       style={{ backgroundColor: "#091953", color: "white" }}
//                     >
//                       <div className="text-center" style={{ fontSize: "100%" }}>
//                         <p className="mb-3 mt-1" style={{ fontSize: "350%" }}>
//                           📊📊📊
//                         </p>
//                       </div>
//                       <p
//                         style={{
//                           textAlign: "center",
//                           fontSize: "90%",
//                           marginTop: "7px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         El día en el que usaste el estacionamiento por mas
//                         tiempo fue el {user.dia}
//                       </p>
//                     </div>
//                     <div
//                       style={{
//                         textAlign: "center",
//                         fontSize: "200%",
//                         marginTop: "10px",
//                         marginBottom: "-10px",
//                       }}
//                     >
//                       🚲
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-1"></div>
//             </div>
//           </div>
//         ) : (
//           <div className="container-fluid">
//             <div className="row justify-content-center mt-5">
//               <div className="col-md-1"></div>
//               <div className="col-md-5">
//                 <div
//                   className="card p-4 mt-5"
//                   style={{
//                     minWidth: "350px",
//                     maxWidth: "500px",
//                     backgroundColor: "#2B296B",
//                     color: "white",
//                   }}
//                 >
//                   <h4
//                     className="text-center mb-6"
//                     style={{ fontWeight: "bold" }}
//                   >
//                     {user.genero === "M"
//                       ? `¡Bienvenido ${user.nombre}!`
//                       : `¡Bienvenida ${user.nombre}!`}
//                   </h4>
//                   <div
//                     className="card p-4 mt-3"
//                     style={{
//                       minWidth: "350px",
//                       maxWidth: "500px",
//                       backgroundColor: "#2A2248",
//                       color: "white",
//                     }}
//                   >
//                     <div
//                       className="text-left mb-0"
//                       style={{ fontSize: "100%" }}
//                     >
//                       <p style={{ fontWeight: "bold", textAlign: "center" }}>
//                         Tu bici no está en el estacionamiento actualmente
//                       </p>
//                       <div
//                         className="card p-0 mb-0 mt-4"
//                         style={{
//                           backgroundColor: "#091953",
//                           color: "white",
//                           fontSize: "90%",
//                         }}
//                       >
//                         <p
//                           style={{
//                             textAlign: "center",
//                             marginTop: "10px",
//                             marginBottom: "10px",
//                             fontSize: "110%",
//                           }}
//                         >
//                           Presiona el botón de abajo para generar tu código QR
//                         </p>
//                       </div>
//                       <div
//                         style={{
//                           fontSize: "160%",
//                           textAlign: "center",
//                           marginTop: "15px",
//                         }}
//                       >
//                         😄
//                       </div>
//                       <div
//                         className="card p-4 mb-0 mt-4"
//                         style={{
//                           backgroundColor: "#091953",
//                           color: "white",
//                           fontSize: "90%",
//                         }}
//                       >
//                         <p>
//                           Última fecha de uso del estacionamiento:{" "}
//                           {entrada.fecha}
//                         </p>
//                         <p>
//                           Nombre del guardia que dió la última salida:{" "}
//                           {entrada.guardia}
//                         </p>
//                       </div>
//                       <div
//                         style={{
//                           textAlign: "center",
//                           fontSize: "200%",
//                           marginTop: "0px",
//                           marginBottom: "-5px",
//                         }}
//                       >
//                         🚲
//                       </div>
//                     </div>
//                   </div>
//                   <a href="/qrGenerator" style={{ textAlign: "center" }}>
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block mt-4"
//                     >
//                       Generar QR de entrada
//                     </button>
//                   </a>
//                 </div>
//               </div>
//               <div className="col-md-5">
//                 <div
//                   className="card p-4 mt-5"
//                   style={{
//                     minWidth: "350px",
//                     maxWidth: "500px",
//                     backgroundColor: "#2B296B",
//                     color: "white",
//                   }}
//                 >
//                   <h5 className="text-center mb-6">
//                     Estadísticas de uso del estacionamiento 🤓
//                   </h5>
//                   <div
//                     className="card p-4 mt-3"
//                     style={{
//                       minWidth: "350px",
//                       maxWidth: "500px",
//                       backgroundColor: "#2A2248",
//                       color: "white",
//                     }}
//                   >
//                     <div
//                       className="card p-1 mb-0 mt-0"
//                       style={{
//                         backgroundColor: "#091953",
//                         color: "white",
//                         fontSize: "90%",
//                       }}
//                     >
//                       <p
//                         style={{
//                           textAlign: "center",
//                           marginTop: "10px",
//                           marginBottom: "10px",
//                           fontSize: "110%",
//                         }}
//                       >
//                         ¡Esta semana usaste el estacionamiento durante un total
//                         de {user.horas} horas!
//                       </p>
//                     </div>
//                     <p
//                       className="text-center mb-2 mt-4 mb-1"
//                       style={{ fontWeight: "bold" }}
//                     >
//                       Gráficos de uso:
//                     </p>
//                     <div
//                       className="card p-4 mb-0 mt-3"
//                       style={{ backgroundColor: "#091953", color: "white" }}
//                     >
//                       <div className="text-center" style={{ fontSize: "100%" }}>
//                         <p className="mb-3 mt-1" style={{ fontSize: "350%" }}>
//                           📊📊📊
//                         </p>
//                       </div>
//                       <p
//                         style={{
//                           textAlign: "center",
//                           fontSize: "90%",
//                           marginTop: "7px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         El día en el que usaste el estacionamiento por mas
//                         tiempo fue el {user.dia}
//                       </p>
//                     </div>
//                     <div
//                       style={{
//                         textAlign: "center",
//                         fontSize: "200%",
//                         marginTop: "10px",
//                         marginBottom: "-10px",
//                       }}
//                     >
//                       🚲
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-1"></div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomeUser;

// // Retroalimentacion del usuario post ingreso (Bienvenido "nombre persona", también aparecer si su bici está dentro del inacap, última fecha de uso del estacionamiento, nombre del guardia que hizo la entrada de la bici, usando UseEffect que consuma la API para ver el nombre del usuario)

// // Hacerlo como sports dashboard app, integrar estadisticas y usar paleta de colores del fondo. Usar template strings.
