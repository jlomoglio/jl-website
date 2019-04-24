import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/bg.jpg';

const Styles = styled.div`
  .page {
    background: url(${bgImg}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    margin: 0;
    padding: 0;
    padding-top: 10%;
  }

  .slide {
    margin: 0 auto;
    height: 85%;
  }

  .slide > .slideInner {
    padding-top: 80px;
    padding-left: 150px;
    padding-right: 150px;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .name {
    font-size: 90px;
  }

  .resume-btn {
    border: 1px solid white;
    color: white;
    background: transparent;
    padding: 10px;

    &:hover {
      text-decoration: none;
      background: white;
      
      >a {
        color: black;
      }
    }
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: none;
      color: black;
    }
  }
`;

const Home = () => (
  <Styles>
    <div className="page">
      <div className="slide d-block w-100">
        <div className="slideInner">
          <h1 className="name">{'${Joe LoMoglio}'}</h1>
          <h3> Not Your Average UI/UX Designer & Front End Developer</h3>
          <h4>I exist where Code and Design Intersect</h4>
          <br />
          <button className="resume-btn">
            <a href="JL_Resume_2019.pdf" target="_blank">Download Resume</a>
          </button>
        </div>
      </div>
    </div>
  </Styles>
);

export default Home;