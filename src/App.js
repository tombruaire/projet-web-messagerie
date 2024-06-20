import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./App.css";

import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  const location = useLocation();

  return (
    <div className="">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">DealChat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/chat">
              Chat
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
