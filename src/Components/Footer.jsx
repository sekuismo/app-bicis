import React from "react";

function Footer() {
  return (
    <footer class="footer bg-dark py-3 fixed-bottom left-0 w-full">
      <div class="container mx-auto px-3 text-center">
        <div class="text-white text-sm flex flex-wrap justify-center items-center">
          <a
            class="link-primary px-2 py-2"
            href="/terminos"
          >
            Términos y condiciones
          </a>{" "}
          <span class="text-white" >|</span>{" "}
          <a
            className="link-primary px-2 py-2"
            href="/manual"
          >
            Manual de usuario
          </a>{" "}
          <span class="text-white" >| </span>{" "}
          <span class="text-white font-semibold px-2 py-2">
            Desarrollado por Esteban Muñoz, Felipe Jimenez y Marcial Díaz.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
