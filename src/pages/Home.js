import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/bg.jpg';
import Carousel from 'react-bootstrap/Carousel';

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
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: none;
      color: white;
    }
  }
`;

const Home = () => (
  <Styles>
    <div className="page">
      <Carousel>
        <Carousel.Item>
          <div className="slide d-block w-100">
            <div className="slideInner">
              <h1 className="name">Joe LoMoglio</h1>
              <h3> I'm a Creative UI/UX Designer & Developer</h3>
              <h4>I exist where Code and Design Intersect</h4>
              <br />
              <button className="resume-btn">
                <a href="JL_Resume_2019.pdf" target="_blank">Download Resume</a>
              </button>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="slide d-block w-100">
            <div className="slideInner">
              <h1 className="name">Designer</h1>
              <h2 className="p-3">
                I understand the perfect user interface 
                <br />
                should look good and work even better. 
              </h2>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="slide d-block w-100">
            <div className="slideInner">
              <h1 className="name">Developer</h1>
              <h2 className="p-3">
                I specialize in creating modular and scalable 
                <br /> 
                front-end architectures and components.
              </h2>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </Styles>
);

export default Home;