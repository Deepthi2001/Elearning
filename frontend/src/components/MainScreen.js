import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">{children}</div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
