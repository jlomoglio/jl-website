import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import meImg from '../assets/vector-me-contact.png';
import resumeIcon from '../assets/resume_icon.png';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
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

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }

  .me-img {
    width: 90%;
  }

  .icons {
    padding: 0;
    margin-top: 20px;
  }

  .icon {
    width: 100px;
    height: auto;
    display: inline-block;
  }
`;

const Contact = () => (
  <Styles>
    <div className="page">
      <Row>
        <Col sm={12} md={6} className="center">
          <h2 className="mt-5 mb-4">Get In Touch</h2>
          <h4>
            329 Lagoon Key
            <br />
            Plant City, FL 33565
            <br />
            (813) 750-4621
            <br />
            joe.lomoglio@gmail.com
          </h4>

          <div className="icons">
            <a href="https://docs.google.com/document/d/1lN60T2lj-E6pDvlqF7FcCMXKKHbtvjdPRg8Iwjj-2nQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={resumeIcon} className="icon" alt="Download Resume" />
            </a>
            <a href="https://github.com/jlomoglio" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} className="icon" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/joe-lomoglio-designer/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} className="icon" alt="LinkedIn" />
            </a>
          </div>
        </Col>
        <Col sm={12} md={6} className="center">
          <img src={meImg} className="me-img" alt="Me Desk" />
        </Col>
      </Row>

      <Row>
        <Col>
          <hr className="mt-4 mb-4" />
        </Col>
      </Row>

      <Row style={{ marginBottom: '0', paddingBottom: '0' }}>
        <Col sm={12} className="center">
          <p>
            © Joe LoMoglio 2019. All rights reserved. | Built with React.
          </p>
        </Col>
      </Row>
    </div>
  </Styles>
);

export default lifecycle(methods)(Contact);