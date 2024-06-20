import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse e-mail invalide")
      .required("L'adresse e-mail est requise"),
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
    <div className="card content px-3 py-5">
      <img src={logo} className="logo" alt="logo" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Bienvenue à DealChat</h5>
        <p className="card-text text-center fw-lighter">
          Connectez-vous et échangez en temps réel sur DealChat, votre
          plateforme de communication instantanée.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              placeholder="name@example.com"
              aria-describedby="emailHelp"
            />
            <label htmlFor="email">Adresse e-mail</label>
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
            <div id="emailHelp" className="form-text fw-lighter">
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
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
          <center>
            <button type="submit" className="btn btn-primary text-center">
              Se connecter
            </button>
            <Link
              to="/signup"
              className="ms-3 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              S'inscrire
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
