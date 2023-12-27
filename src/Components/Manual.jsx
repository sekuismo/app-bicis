import React from "react";
import registroImage from "../assets/manual/registro.png";
import loginImage from "../assets/manual/login.png";
import userHomeImage from "../assets/manual/homeUser.png"
import modificarBici from "../assets/manual/modificarBicicleta.png"
import generarQR from "../assets/manual/generarQR.png"
import codigoQR from "../assets/manual/codigoQR.png"
import monitoreo from "../assets/manual/monitoreo.png"
import escanearQR from "../assets/manual/escanearQR.png"
import entradasYSalidas from "../assets/manual/entradasYSalidas.png"
import cuentaGuardia from "../assets/manual/cuentaGuardia.png"

function Manual() {
  return (
<div className="container">
      <div className="row mt-3">
        <div className="col-12">

    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mb-5">
      <h2 className="text-2xl font-semibold mb-5 text-center mt-4">
        Manual de usuario de la aplicación "Bicinacap"
      </h2>
      <br></br>
      <p>
        En el siguiente manual de usuario se detallarán las instrucciones de uso
        de la app de ingreso de bicicletas Bicinacap, la cual será utilizada por
        estudiantes, funcionarios, docentes y guardias a través de un navegador
        web en sus celulares, y por administradores del sistema a través de un
        navegador web en su PC.
      </p>
      <p className="mb-4">
        El manual detallará el proceso de creación de cuenta y de inicio de
        sesión. Posteriormente se dividirá en 3 partes, las cuales detallarán
        las instrucciones de uso para los siguientes tipos de usuario:
      </p>
      <ul>
        <li>
          <p style={{ fontWeight: "bold" }}>Usuarios:</p>
          <p>
            Estudiantes / docentes / funcionarios que necesiten entrar o salir
            del estacionamiento con su bicicleta.
          </p>
        </li>
        <li>
          <p style={{ fontWeight: "bold" }}>Guardias:</p>
          <p>
            Se encargarán de escanear los códigos QR generados por los usuarios
            en sus aplicaciones para autorizar la entrada / salida del
            estacionamiento.
          </p>
        </li>
        <li>
          <p style={{ fontWeight: "bold" }}>Administradores:</p>
          <p>
            Podrán crear cuentas para guardias y monitorear el estacionamiento,
            entre otras cosas.
          </p>
        </li>
      </ul>
      <h3 className="mt-5 mb-5">
        Instalación de la aplicación (administrador)
      </h3>
      <p>
        Para desplegar la aplicación en un PC con sistema operativo Windows se
        deberá instalar la herramienta Vite, la cual permitirá ejecutar y
        desplegar. El contenido del proyecto estará ubicado en la carpeta
        comprimida facilitada a INACAP. Para instalar Vite y abrir el proyecto
        el siguiente link puede ser de utilidad:
      </p>
      <ul className="mt-4">
        <li>
          <a target="_blank" href="https://carlosazaustre.es/react-vite">
            ¿Cómo iniciar un proyecto React con Vite?
          </a>
        </li>
      </ul>
      <h3 className="mt-5 mb-5">Despliegue del servicio</h3>
      <p>
        El back end de esta aplicación está desplegado en la nube por medio del
        servidor virtual privado Amazon Lightsail y utilizando el entorno de
        desarrollo Node JS.
      </p>
      <h3 className="mt-5 mb-5">Registro e Inicio de Sesión</h3>
      <p>
        Para ingresar a la aplicación, el usuario deberá ingresar la url
        proporcionada por INACAP en su navegador web de preferencia dentro del
        celular. Al hacerlo se encontrará con la ventana principal de la
        aplicación, y pulsando el ícono ☰ se podrá ingresar al menú de registro.
        Aquí se podrán ingresar los datos y el tipo de usuario (estudiante /
        docente / funcionario) para crear la cuenta:
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={registroImage}
            alt="Menu de Registro"
            className="img-fluid"
          />
        </div>
      </div>
      <p>
        Nuevamente se pulsa el ícono ☰, y se selecciona “Iniciar Sesión”,
        ingresando las credenciales recién creadas:
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={loginImage}
            alt="Menu de Login"
            className="img-fluid"
          />
        </div>
      </div>
      <p>
        La ventana que se abrirá posteriormente dependerá del tipo de cuenta.
      </p>
      <h3 className="mt-5 mb-5">Ventana de Usuario</h3>
      <p>
        En la ventana de usuario se podrán ver los datos de la bicicleta del usuario:
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={userHomeImage}
            alt="Menu de Usuario"
            className="img-fluid"
          />
        </div>
      </div>
      <p>
        Se pueden modificar estos datos pulsando el botón "Modificar bicicleta":
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={modificarBici}
            alt="Menu de Modificar Bicicleta"
            className="img-fluid"
          />
        </div>
      </div>
      <p>
        Para generar el código QR de estacionamiento se debe ir a la esquina superior izquierda, presionar el ícono ☰ y luego la opción "Estacionar":
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={generarQR}
            alt="Generar QR"
            className="img-fluid"
          />
        </div>
      </div>
      <p>
        Luego se pulsa el botón y se genera el código QR de entrada al estacionamiento:
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={codigoQR}
            alt="Código QR"
            className="img-fluid"
          />
        </div>
      </div>
      <h3 className="mt-5 mb-5">Ventana de Guardia</h3>
      <p>
        En esta ventana se podrán ver estadísticas generales del uso del
        bicicletero, ver una lista de usuarios activos (usuarios que están
        usando el estacionamiento en tiempo real) y escanear códigos QR de
        usuarios para validar su ingreso al bicicletero, pulsando los botones "Ver usuarios activos" y "Revisar QR" respectivamente:
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={monitoreo}
            alt="Monitoreo del estacionamiento"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={escanearQR}
            alt="Escanear QR"
            className="img-fluid"
          />
        </div>
      </div>
      <h3 className="mt-5 mb-5">Ventana de Administrador</h3>
      <p className="mb-5">
        De manera similar, en la ventana de administrador podrá acceder al registro de entradas y
        salidas de los usuarios, al monitoreo del estacionamiento (lista de
        usuarios que están usando el estacionamiento en tiempo real) y crear
        cuentas para los guardias del recinto.
      </p>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={entradasYSalidas}
            alt="Entradas y salidas"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div className="img-container">
          <img
            src={cuentaGuardia}
            alt="Cuenta Guardia"
            className="img-fluid"
          />
        </div>
      </div>
      <p className="mb-5">
        Para cerrar sesión se debe hacer click en "Cerrar Sesión" en la barra de navegación superior.
      </p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Manual;
