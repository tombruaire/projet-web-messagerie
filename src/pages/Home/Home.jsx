import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Home.css";

import Login from "../../components/Login/Login";

const Home = () => {

  return (
    <div className="background d-flex justify-content-center align-items-center">
      <Fade direction="up" duration={500} triggerOnce={false}>
          <div className="d-flex justify-content-center align-items-center">
            <Login />
          </div>
      </Fade>
    </div>
  );
};

export default Home;
