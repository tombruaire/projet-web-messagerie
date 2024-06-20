import React from "react";
import "./Welcome.css";

import logo from "../../assets/logo.png";

import Login from "../Login/Login";

const Welcome = () => {
  return (
    <div className="card content px-3 py-5">
      <img src={logo} className="logo" alt="logo" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Bienvenue à DealChat</h5>
        <p className="card-text text-center fw-lighter">
          Connectez-vous et échangez en temps réel sur DealChat, votre
          plateforme de communication instantanée.
        </p>
        <Login />
      </div>
    </div>
  );
};

export default Welcome;
