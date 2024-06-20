import React from "react";

const Login = () => {
  return (
    <form>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="name@example.com"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
        <div id="emailHelp" className="form-text fw-lighter">
          Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Mot de passe"
        />
        <label htmlFor="exampleInputPassword1">Mot de passe</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Soumettre
      </button>
    </form>
  );
};

export default Login;
