import React from 'react';
import "./SignUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("L'adresse email est requise"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: false,
    validationSchema,
  });

  return (
    <center>
      <div className="card content px-3">
      <img src={logo} className="logo" alt="logo" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Bienvenue à DealChat</h5>
        <p className="card-text text-center fw-lighter">
          Créez un compte échangez en temps réel sur DealChat, votre
          plateforme de communication instantanée.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="nom"
              name="nom"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.nom}
              error={formik.errors.nom}
              placeholder="Nom"
            />
            <label htmlFor="nom">Nom</label>
            {formik.errors.nom && (
              <div className="text-danger">{formik.errors.nom}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="prenom"
              name="prenom"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.prenom}
              error={formik.errors.prenom}
              placeholder="Prénom"
            />
            <label htmlFor="nom">Prénom</label>
            {formik.errors.prenom && (
              <div className="text-danger">{formik.errors.prenom}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              name="email"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              placeholder="Adresse email"
              aria-describedby="emailHelp"
            />
            <label htmlFor="email">Adresse email</label>
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
            <div id="emailHelp" className="form-text fw-lighter">
              Nous ne partagerons jamais votre email avec quelqu'un d'autre.
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
              placeholder="Mot de passe"
            />
            <label htmlFor="password">Mot de passe</label>
            {formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              onChange={formik.handleChange}
              value={formik.values.password2}
              error={formik.errors.password2}
              placeholder="Confirmation du mot de passe"
            />
            <label htmlFor="password">Confirmation du mot de passe</label>
            {formik.errors.password2 && (
              <div className="text-danger">{formik.errors.password2}</div>
            )}
          </div>
          <center>
            <button type="submit" className="btn btn-primary text-center">
              Se connecter
            </button>
            
          </center>
        </form><br/>
        <p>Déjà un compte ?<Link to="/" className="ms-3 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Se connecter</Link></p>
      </div>
    </div>
    </center>
  );
};

export default SignUp;