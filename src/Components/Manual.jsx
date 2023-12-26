import React from "react";

function Manual() {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
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
        deberán instalar las herramientas React y Vite, para luego abrir el
        proyecto y ejecutarlo. El contenido del proyecto estará ubicado en la
        carpeta comprimida facilitada a INACAP. Para instalar React, Vite y
        abrir el proyecto los siguientes links pueden ser de utilidad:
      </p>
      <ol>
        <li>
          <a
            target="_blank"
            href="https://kinsta.com/es/base-de-conocimiento/instalar-react/"
          >
            Instalación de React
          </a>
        </li>
        <li>
          <a target="_blank" href="https://es.vitejs.dev/guide/">
            Instalación de Vite
          </a>
        </li>
      </ol>
      <h3 className="mt-5 mb-5">Registro e Inicio de Sesión</h3>
      <p>
        Para ingresar a la aplicación, el usuario deberá ingresar la url
        proporcionada por INACAP en su navegador web de preferencia dentro del
        celular. Al hacerlo se encontrará con la ventana principal de la
        aplicación, y pulsando el ícono ☰ se podrá ingresar al menú de registro
        para crear la cuenta:
      </p>
      IMAGEN 1
      <p>
        En la sección “Registrarse” se podrán ingresar los datos y el tipo de
        usuario (estudiante / docente / funcionario) para crear la cuenta:
      </p>
      IMAGEN 2
      <p>
        Nuevamente se pulsa el ícono ☰, y se selecciona “Iniciar Sesión”,
        ingresando las credenciales recién creadas:
      </p>
      IMAGEN 3
      <p>
        La ventana que se abrirá posteriormente dependerá del tipo de cuenta.
      </p>
      <h3 className="mt-5 mb-5">Ventana de Usuario</h3>
      IMAGEN 4
      <p>
        En la ventana de usuario se podrán ver estadísticas del mismo en cuanto
        a su uso del bicicletero, y en caso de que su bicicleta no esté en el
        estacionamiento se podrá generar el código QR de ingreso pulsando el
        botón “Generar QR de entrada”, el cual llevará a la ventana donde se
        generará el código QR de acceso:
      </p>
      IMAGEN 5<h3 className="mt-5 mb-5">Ventana de Guardia</h3>
      <p>
        En esta ventana se podrán ver estadísticas generales del uso del
        bicicletero, ver una lista de usuarios activos (usuarios que están
        usando el estacionamiento en tiempo real) y escanear códigos QR de
        usuarios para validar su ingreso al bicicletero.
      </p>
      <h3 className="mt-5 mb-5">Ventana de Administrador</h3>
      <p>
        En esta ventana el administrador podrá acceder al registro de entradas y
        salidas de los usuarios, al monitoreo del estacionamiento (lista de
        usuarios que están usando el estacionamiento en tiempo real) y crear
        cuentas para los guardias del recinto.
      </p>
    </div>
  );
}

export default Manual;
