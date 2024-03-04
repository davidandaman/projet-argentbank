/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="">
      <h1>404</h1>
      <h2>
        <span>Oups! La page que</span>
        <span>vous demandez n'existe pas.</span>
      </h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default Error;
