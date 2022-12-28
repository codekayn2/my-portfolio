import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import multer1 from "../assets/img/meter1.svg";
import multer2 from "../assets/img/meter2.svg";
import multer3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                React , JavaScript, TypeScript,Redux Toolkit, CSS-Modules /
                SCSS, Git, GitHub
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={multer1} alt="Image" />
                    <h5>React, Redux Toolkit</h5>
                  </div>
                  <div className="item">
                    <img src={multer2} alt="Image" />
                    <h5>CSS-Modules / SCSS, Git, GitHub</h5>
                  </div>
                  <div className="item">
                    <img src={multer3} alt="Image" />
                    <h5>JavaScript, TypeScript</h5>
                  </div>
                </Carousel>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
