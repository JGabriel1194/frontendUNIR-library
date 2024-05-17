import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="row text-center footer">
      <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;