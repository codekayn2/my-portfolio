import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "./assets/img/logo.svg";
import navIcon1 from "./assets/img/nav-icon1.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://t.me/codekayn">
                <img src={navIcon1} alt="navIcon1" />
              </a>
              <a href="https://www.instagram.com/codekayn.io/">
                <img src={navIcon3} alt="navIcon3" />
              </a>
            </div>
            <p>2023 ComeBack</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
