import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import meImg from '../assets/vector-me.png';
import meImg2 from '../assets/vector-me-many-hats.png'
import lifecycle from 'react-pure-lifecycle';

const methods = {
  componentDidMount(props) {
    window.scrollTo(0, 0);
  }
};

const Styles = styled.div`
  .page {
    padding-top: 100px;
  }

  .me-photo {
    width: 100%;
  }

  .me-photo-2 {
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`;

const About = () => (
  <Styles>
    <div className="page">
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <img src={meImg} className="me-photo" alt="Vector Graphic" />
          </Col>
          <Col sm={12} md={7}>
            <h1>Hi, I'm Joe!</h1>
            <h5>A designer, developer and serious caffeine addict.</h5>
            <p className="pt-2">
              I am a highly innovative, passionate and straight shooting designer with 
              a high proficiency in problem-solving, visual UI design, UX design, user-centered 
              design principles and methodologies, and front-end architecture and development.
            </p>
            <p>
              With a unique skill-set that spans various disciplines from hands-on UI/UX design to 
              front-end development. Over 20 years of experience in understanding and developing 
              solutions from concept ideas into production. Highly effective written and verbal 
              communicator with exceptional problem-solving skills and team leadership.
            </p>
            <p>
              I specialize in Users. From Interfaces to Experiences my goal is to create things that just work. 
              I design pixel based solutions for web applications using the latest technologies, and a touch of 
              Jedi Mind Powers.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr className="mt-4 mb-4" />
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="center">
              UI Craftsman is not just my nickname. It describes me to a "T". I put 
              <br />
              heart and soul into every design I craft and every line of code I write. 
              <br />
              My craftmanship is embodied in my style, dedication and attention to detail.
            </h4>
            <br /><br />
          </Col>
        </Row>

        <Row>
          <Col>
            <hr className="mt-4 mb-4" />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="center">The Various Hats I Wear</h2>
            <img src={meImg2} className="me-photo-2 center" />
          </Col>
        </Row>

        <Row>
          <Col>
            <hr className="mt-4 mb-4" />
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="center">
            <p>
              © Joe LoMoglio 2019. All rights reserved. | Built with React.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </Styles>
);

export default lifecycle(methods)(About);
