import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark py-3 fixed-bottom left-0 w-full">
      <div className="container mx-auto px-3 text-center">
        <div className="text-white text-sm flex flex-wrap justify-center items-center">
          <a
            className="link-primary px-2 py-2"
            href="/terminos"
          >
            Términos y condiciones
          </a>{" "}
          <span className="text-white" >|</span>{" "}
          <a
            className="link-primary px-1 py-1"
            href="/manual"
          >
            Manual de usuario
          </a>{" "}
          <span className="text-white" id="footerInfo" >| </span>{" "}
          <span className="text-white font-semibold px-1 py-1" id="footerInfo">
            Desarrollado por Esteban Muñoz, Felipe Jimenez y Marcial Díaz.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
