import React from "react";
import "./styles.css"; // cargamos la hoja de estilo

export default function MainContent() {
  /* funcion , contenido principal , crea un titulo y una lista */
  return (
    <section className="main-content">
      <h1 className="title">Razones por las cual quiero aprender React!</h1>
      <ol className="list">
        <li className="list-item">
          Es una libreria popular, entonces me podria sentar con los cools!
        </li>
        <li className="list-item">
          Es mas probable conseguir trabajo como developer, si conozco React
        </li>
      </ol>
    </section>
  );
}
