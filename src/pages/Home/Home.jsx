import React from "react";
import { Container } from "react-bootstrap";

import "./Home.css";

import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div className="background d-flex justify-content-center align-items-center">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <Welcome />
        </div>
      </Container>
    </div>
  );
};

export default Home;
