import React, { useState } from "react";

import "./DashBoard.css";
import { Col, Container } from "react-bootstrap";

import defaultAvatar from "../../assets/default-avatar.png";

const Dashboard = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const mockedData = [
    {
      id: 1,
      name: "Basia Barker",
      email: "urna.nunc.quis@google.edu",
    },
    {
      id: 2,
      name: "Xandra Stark",
      email: "malesuada.integer.id@protonmail.net",
    },
    {
      id: 3,
      name: "Nash Graham",
      email: "congue.a@outlook.org",
    },
    {
      id: 4,
      name: "Sage Terry",
      email: "ac.feugiat.non@protonmail.com",
    },
    {
      id: 5,
      name: "Dale Hayden",
      email: "praesent.luctus@outlook.ca",
    },
    {
      id: 6,
      name: "Ralph Barron",
      email: "a.neque@icloud.ca",
    },
    {
      id: 7,
      name: "Malik Carroll",
      email: "faucibus.lectus@google.net",
    },
    {
      id: 8,
      name: "Noah Harrington",
      email: "cras.eget.nisi@google.com",
    },
    {
      id: 9,
      name: "Kamal Brown",
      email: "mauris.suspendisse@icloud.ca",
    },
    {
      id: 10,
      name: "Ina Mendoza",
      email: "sit.amet@protonmail.org",
    },
  ];

  // Gérer le clic sur un profil
  const handleProfileClick = (profileId) => {
    setActiveChat(profileId);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("Message envoyé");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = mockedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="content d-flex justify-content-center align-items-center">
        <Col md={4} lg={4} xl={4}>
          <div className="fs-1 fw-bold">Contact</div>
          <input
            className="form-control mb-3 p-2"
            style={{width: "90%"}}
            id="searchTerm"
            name="searchTerm"
            onChange={handleSearchChange}
            value={searchTerm}
            placeholder="Rechercher..."
            aria-describedby="searchHelp"
          />
          <div className="sidebar">
            {filteredUsers.map((item) => (
              <div
                className="sidebar-item d-flex align-items-center mb-3 p-3 "
                key={item.id}
                onClick={() => handleProfileClick(item.name)}
              >
                <div>
                  <img
                    src={defaultAvatar}
                    alt="default-avatar"
                    className="defaultAvatar"
                  />
                </div>
                <div className="ms-2">
                  <div>{item.name}</div>
                  <div className="fw-lighter">{item.email}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col md={8} lg={8} xl={8}>
          <div className="chat border-start px-3">
            <div name="chat-title" className="fs-1 fw-bold">
              Chat
            </div>
            <div className="chat-content d-flex flex-column justify-content-between">
              <div className="chat-messenges">
                {activeChat ? (
                  <div>
                    Affichage de la discussion pour le profil: {activeChat}
                  </div>
                ) : (
                  <div>Sélectionnez un profil pour commencer à discuter.</div>
                )}
              </div>
              <div className="chat-input">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "10vh" }}
                    onKeyPress={handleKeyPress}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Message</label>
                  <button className="btn btn-primary mt-2">Envoyer</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default Dashboard;
