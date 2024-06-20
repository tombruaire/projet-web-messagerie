import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import ChatRoom from "./pages/ChatRoom/ChatRoom";

const App = () => {
  const location = useLocation();

  return (
    <div className="">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </div>
  );
};

export default App;
