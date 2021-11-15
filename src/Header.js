import React from "react";
import "./styles.css"; // cargamos la hoja de estilo

export default function Header() {
  /* exportamos por defecto la funcion header */
  return (
    <header className="encabezado">
      <nav className="navbar">
        <img src="./react-logo.png" className="nav-logo" alt="react logo" />
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#root"> Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#root">About</a>
          </li>
          <li className="nav-item">
            <a href="#root">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
