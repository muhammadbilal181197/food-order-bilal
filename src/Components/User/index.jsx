import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { Credentials } from "../../Data/validCredentials";

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleLogin = () => {
    const matchedCredentials = Credentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (matchedCredentials) {
      setIsLoggedIn(true);
      setShowModal(false);
      setErrorMessage("");
    } else {
      setIsLoggedIn(false);
      setErrorMessage("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setIsLoggedIn(false);
    setErrorMessage("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage("");
  };

  return (
    <div className="profile-icon">
      {isLoggedIn ? (
        <>
          <span>{username}</span>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Login
          </Button>
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {errorMessage && (
                <Alert
                  variant="danger"
                  onClose={() => setErrorMessage("")}
                  dismissible
                >
                  {errorMessage}
                </Alert>
              )}
              <input

                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default User;
