import React from "react";

function Terminos() {
  return (
    <div
      className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg"
      id="terms"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center mt-3">
        Términos y condiciones de la aplicación "Bicinacap"
      </h2>
      <p className="text-gray-700 italic mt-5">
        <strong>
          Estos términos y condiciones rigen tu uso de la aplicación. Al acceder
          y utilizar la aplicación, aceptas estos términos.
        </strong>{" "}
      </p>
      <h3 className="mt-5 mb-5">1) Uso de la Aplicación</h3>

      <h4 className="mt-4 mb-4">1.1) Licencia de Uso:</h4>
      <p>
        Se concederá una licencia para utilizar la aplicación a todos aquellos
        estudiantes/docentes/funcionarios cuyo proceso de postulación al
        estacionamiento haya sido aprobado por las autoridades correspondientes
        de la sede Santiago Centro del instituto INACAP.
      </p>

      <h4 className="mt-4 mb-4">1.2) Restricciones de Uso:</h4>
      <ol>
        <li>
          La aplicación no puede usarse para otorgar acceso a otra persona que
          no sea el estudiante/docente/funcionario asociado a la cuenta (el
          código QR es intransferible).
        </li>
        <li>
          Solo se puede ingresar 1 bicicleta por código QR al estacionamiento.
        </li>
        <li>
          La app contará con un sistema de prioridad definido por las
          autoridades de INACAP Santiago Centro, para así ordenar los ingresos
          al estacionamiento en momentos de alta demanda.
        </li>
        <li>
          Una vez generado el código QR este expirará en 20 minutos. En caso de
          que no se haya alcanzado a utilizar dicho QR se puede generar otro
          más.
        </li>
        <li>
          Cada cuenta está asociada a una bicicleta única (con información sobre
          el modelo, accesorios, etc). Para utilizar otra bicicleta se deben
          ingresar los datos correspondientes a la misma en la app.
        </li>
      </ol>
      <p>
        <em>
          El incumplimiento de cualquiera de estas restricciones es causal de
          suspensión de la cuenta en la app.
        </em>
      </p>

      <h3 className="mt-5 mb-5">2) Contenido del Usuario</h3>

      <h4 className="mt-4 mb-4">2.1) Derechos de Propiedad del Contenido:</h4>
      <p>
        La información del usuario contenida en la aplicación puede ser
        utilizada por la institución INACAP para obtención de estadísticas e
        inferencias sobre el uso de bicicletas en la comunidad. Dicha
        información no será compartida con terceros y estará protegida por medio
        de protocolos de ciberseguridad.
      </p>

      <h3 className="mt-5 mb-4">3) Privacidad</h3>
      <h4 className="mt-5 mb-4">3.1) Recopilación de Información:</h4>
      <p>
        Se recopilará información para mejorar la experiencia académica, pero no
        se compartirán datos con terceros, como se mencionó en el punto
        anterior.
      </p>

      <h3 className="mt-5 mb-5">4) Términos Legales</h3>

      <h4 className="mt-4 mb-4">4.1) Limitación de Responsabilidad:</h4>

      <p>
        No somos responsables de cualquier pérdida o daño derivado del uso
        académico de la aplicación.
      </p>

      <h4 className="mt-5 mb-4">4.2) Modificaciones de Términos:</h4>

      <p>
        Podemos actualizar estos términos para reflejar cambios académicos sin
        previo aviso.
      </p>

      <h3 className="mt-5 mb-5">5) Términos Generales</h3>

      <h4 className="mt-4 mb-4">5.1) Terminación del Acuerdo:</h4>

      <p>Podemos suspender o terminar tu acceso en caso de uso indebido.</p>

      <h4 className="mb-4 mt-4">5.2) Ley Aplicable:</h4>

      <p>
        Estos términos se rigen por las leyes académicas actuales de la
        institución de educación superior INACAP.
      </p>

      <h3 className="mt-5 mb-4">6) Contacto</h3>

      <p>
        Si tienes alguna pregunta sobre estos términos, puedes contactarnos en{" "}
        <a href="mailto:bicinacap@inacapmail.cl">bicinacap@inacapmail.cl</a>
      </p>
    </div>
  );
}

export default Terminos;
