/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="main">
      <section className="page-404">
        <div className="error-404">404 </div>
        <h2>
          <span>Oups! La page que</span>
          <span>vous demandez n'existe pas.</span>
        </h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
    </div>
  );
}

export default Error;
