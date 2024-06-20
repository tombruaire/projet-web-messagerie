import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  const location = useLocation();

  return (
    <div className="">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </div>
  );
};

export default App;
