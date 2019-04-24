import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Styles = styled.div`
  .number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: blue;
    color: white;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
  }

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }

  img {
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ValueCard = (props) => (
  <Styles>
    <Card style={{ width: '100%', paddingTop: '0px', height: `${props.height}px`, boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.10)' }}>
      <Card.Img variant="top" src={props.img} style={{ width: `${props.width}%`}} />
      <hr />
      <Card.Body>
        <Card.Title className="center">{ props.title }</Card.Title>
        <Card.Text>
          { props.children }
        </Card.Text>
      </Card.Body>
    </Card>
  </Styles>
);

export default ValueCard;