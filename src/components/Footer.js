import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Styles = styled.div`
  .footer {
    padding: 10px;
    background: black;
    color: white;
    width: 100%;
    margin-top: 25px;
  }

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`;

const Footer = () => (
  <Styles>
    <Row style={{ marginBottom: '0', paddingBottom: '0' }}>
      <Col sm={12} className="footer center">
        <p>© Joe LoMoglio 2019. All rights reserved.</p>
      </Col>
    </Row>
  </Styles>
);

export default Footer;