import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import ValueCard from '../components/ValueCard';
import simcoreImg from '../assets/simcore.png';
import vuiImg from '../assets/vui.png';
import jcoreImg from '../assets/jcore.png';
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

  .bold {
    font-weight: bold;
  }

  .link2 {
    padding-left: 5px;
  }

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`;

const SimCore = () => (
  <React.Fragment>
    <span className="bold">SimCore</span>
    <br />
    <span>
      <a href="https://github.com/jlomoglio/SimCore" target="_blank">Code Repository</a> |
      <a href="https://www.youtube.com/watch?v=SgTiNqgmBAs&feature=youtu.be" target="_blank" className="link2">Video Demo</a>
    </span>
    <br /><br />
    <p>
      SimCore is the custom framework I designed and built on top of VueJS while working at Lumina Datamatics. The 
      purpose of the framework is to provide a seamless and easy to implement structure 
      for developing custom 3D learning modules for the Cengage platform.
    </p>
  </React.Fragment>
);

const Vui = () => (
  <React.Fragment>
    <span className="bold">Vui</span>
    <br />
    <span>
      <a href="https://github.com/jlomoglio/vui" target="_blank">Code Repository</a>
    </span>
    <br /><br />
    <span className="bold">Featured On:</span>
    <br />
    <span>
      <a href="https://medium.mybridge.co/vue-js-open-source-of-the-month-v-aug-2018-910de5ad173" target="_blank">Medium.com (Rank 6)</a>
    </span>
    <br /><br />
    <p>
      Vui is a custom VueJS component library based on Boostrap 4 that I designed and built as a pet project 
      after my contract ended at Lumina.
    </p>
  </React.Fragment>
);

const JCore = () => (
  <React.Fragment>
    <span className="bold">jCore</span>
    <br />
    <span>
      <a href="https://github.com/jlomoglio/jCore" target="_blank">Code Repository</a>
    </span>
    <br /><br />
    <p>
      jCore is the custom framework I designed and built for rapidly creating documentation 
      websites and basic web applications. The framework mimics the base concepts of VueJS. Its 
      a single page application framework built using jQuery for its functional structure. 
    </p>
  </React.Fragment>
);

const Projects = () => (
  <Styles>
    <div className="page">
      <Row>
        <Col sm={12} className="pb-4">
          <p>
            The majiority of the projects I have worked on are the intellectual property owned by 
            the companies I worked for and therefore I can not show any of the work I did and the 
            projects are either internal or require a membership to access.
          </p>
          <p>
            However there are a few projects in which I can share that are listed below:
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} className="pb-4">
          <ValueCard img={simcoreImg} width={100}>
            <SimCore />
          </ValueCard>
        </Col>
        <Col sm={12} md={4} className="pb-4">
          <ValueCard img={vuiImg} width={100}>
            <Vui />
          </ValueCard>
        </Col>
        <Col sm={12} md={4} className="pb-4">
          <ValueCard img={jcoreImg} width={100}>
            <JCore />
          </ValueCard>
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

export default lifecycle(methods)(Projects);