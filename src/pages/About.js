import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import meImgIntro from '../assets/vector-me.png';
import meImgDesign from '../assets/me-vector-software.png';
import meImgFeDev from '../assets/vector-me-dev.png';
import meImgBeDev from '../assets/vector-me-dev-backend.png';
import meImgLeader from '../assets/vector-me-biz-2.png';
import lifecycle from 'react-pure-lifecycle';
import './circle.css';

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
    width: 60%;
    margin-left: 15%;
    margin-top: 25px;
  }

  .me-photo-intro {
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
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

  p.skillText {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .inner-content {
    margin: 0 0 120px 0;

    p {
      padding-top: 10px;
    }
  }

  .text-center {
    text-align: center;
  }
`;


const About = () => ( 
  <Styles>
    <div className="page">
      <Container>
        <Row>
          <Col sm={12} md={6} className="pb-5">
            <span className="h3">I'M </span> <span className="h1 text-primary">JOE LOMOGLIO</span> <span className="h3"> AND I'M A</span>
            <span className="h2"> DEVELOPER, DESIGNER</span> <span className="h3">AND</span><span className="h2"></span><br />
            <span className="h3 text-success">REACT.JS JEDI PADAWAN.</span>
            <p className="pt-4">
              I am an innovative, passionate and creative professional who has a wealth of knowledge and experience around design and development. 
              Specializing in creative and groundbreaking solutions and a proven track record of conceptualizing user-centric, high 
              quality interfaces. Strengths include a fusion of design, development and leadership skills and also an 
              ability to solve complex problems using both logic and creativity.
            </p>
            <p>
              Click on the tabs to learn more about each of my specific roles and skills.
            </p>
          </Col>
          <Col sm={12} md={6} className="pb-5">
            <img src={meImgIntro} className="me-photo-intro" alt="Me Intro "/>
          </Col>
        </Row>
        
        <Tabs defaultActiveKey="frontend">
          <Tab eventKey="frontend" title="Front-end Developer">
            <Row>
              <Col sm={12} md={3}>
                <img src={meImgFeDev} className="me-photo" alt="Vector Graphic" />
              </Col>
              <Col sm={12} md={9} className="p-4">
                <p className="pt-2">
                  I'm a front-end developer who is passionate about ReactJS, building great user experiences, fighting for simplicity 
                  over complexity, constantly learning and someone who strives to mentor and share with other developers around me 
                  (so, hopefully, they'll mentor and share with me).
                </p>
                <p>
                  I am hired by companies who need more than just a JavaScript Developer. They are looking for someone 
                  that can help shape and mold their product and to lead the team in that effort. Unlike most front-end developers
                  my skills in design help me to craft interfaces and architectures that meet the exact needs of the user experience.
                </p>
                <p>
                  Up until a year ago my focus was on VueJS, I designed and built my own custom component library 
                  - Vui. Today all my focus is on Full stack React development.
                </p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col sm={12}>
                <div className="inner-content text-center mb-5">
                  <h2>Front-End Developer Skills</h2>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p90 center">
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>HTML 5</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>CSS3 / SASS</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Bootstrap 4</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p60 center">
                    <span>60%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Material UI</em></p>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Responsive & <br /> Adaptive Layouts</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p75 center">
                    <span>75%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>ES6/ES7</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p85 center">
                    <span>85%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Vue / Vuex</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p70 center">
                    <span>70%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>React</em></p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p70 center">
                    <span>70%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Axios / Fetch</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p75 center">
                    <span>75%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Git / Github</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>MobX</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p30 center">
                    <span>30%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Redux</em></p>
                </div>
              </Col>
            </Row>
          </Tab>

          
          <Tab eventKey="backend" title="Back-end Developer">
            <Row>
              <Col sm={12} md={3}>
                <img src={meImgBeDev} className="me-photo" alt="Vector Graphic" />
              </Col>
              <Col sm={12} md={9} className="p-4">
                <p className="pt-2">
                  I began my career over 20 years ago as a full-stack developer. Back in those days there was no concept
                  of front-end development, we built websites and applications using PHP or ColdFusion and all the HTML was
                  output from the server-side code.
                </p>
                <p>
                  But even back then I had the concept of single page applications, everything I built started with index.php and each
                  of the pages were added using includes, which lead me on a journey to the front end in 2010. Today I have come full circle. 
                  I enjoy building API's with PHP, Pyhton and Node/Express. 
                </p>
                <p>
                  I am also knowledgable with databases using SQLAlchemy and also working with Firebase and MongoDB.
                </p>
              </Col>
            </Row>

            <br />

            <Row>
              <Col sm={12}>
                <div className="inner-content text-center mb-5"><h2>Back-End Developer Skills</h2></div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p30 center">
                    <span>30%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>PHP (Laravel)</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p30 center">
                    <span>30%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Python (Flask)</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p45 center">
                    <span>45%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>NodeJS</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p45 center">
                    <span>45%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Express</em></p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p50 center">
                    <span>50%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Rest API's</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p40 center">
                    <span>40%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>SQLAlchemy</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p40 center">
                    <span>40%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Firebase</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p40 center">
                    <span>40%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>MongoDB</em></p>
                </div>
              </Col>
            </Row>
          </Tab>

          
          <Tab eventKey="design" title="UX Designer">
            <Row>
              <Col sm={12} md={3}>
                <img src={meImgDesign} className="me-photo" alt="Vector Graphic" />
              </Col>
              <Col sm={12} md={9} className="p-4">
                <p className="pt-2">
                  I anything but your typical UX Designer - I am a developer with strong UX design skills.
                  I aproach UX from a development perspective. I don't concern myself with metrics or fancy 
                  deliverables. I create practical wireframes and user journry maps and prototypes that make
                  sense to developers as these are our blueprints for development.
                </p>
                <p>
                  I don't beleive that design is a full time discipline, but rather part of the development process.
                  What makes me a valuable asset to the teams I work on is my design skills and how I integrate them
                  into my day to day development flow.
                </p>
                <p>
                  That being said - I do specialize in Users. From Interfaces to Experiences my goal is to create things that just work.
                  I design pixel based solutions for web applications using the latest technologies, and a touch of
                  Jedi Mind Powers.
                </p>
                <p>
                  I am also passionate about creative problem solving and I look forward enhancing the User Experience through clever
                  interfaces using the skills and experience I have acquired thus far. I love learning about how people interact with technology.
                  Fortunately, my curiosity has been the drive behind my love for design and development.
                </p>
                <p>
                  Currently, I'm looking for an enthusiastic team of like minded people to build awesome things with.
                </p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col sm={12}>
                <div className="inner-content text-center mb-5"><h2>UX Designer Skills</h2></div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Empathy</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p90 center">
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>UI/UX Design</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p90 center">
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Wireframes</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p90 center">
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Prototypes</em></p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p90 center">
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Problem Solving</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>User Journeys</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Agile Methodologies</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p80 center">
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Research & Interviewing</em></p>
                </div>
              </Col>
            </Row>
          </Tab>

          
          <Tab eventKey="leader" title="Team Leader">
            <Row>
              <Col sm={12} md={3}>
                <img src={meImgLeader} className="me-photo" alt="Vector Graphic" />
              </Col>
              <Col sm={12} md={9} className="pt-4">
                <p className="pt-2">
                  One of my strongest skills is leadership. I have been the team lead on every project I have worked on. 
                  This is primarily due to my diverse skill set and my understanding of all aspects of design and development.
                  I have been told I am the glue that binds the various members of a project together because I can effectively
                  communicate the needs of the users to the product owners and the needs of the product owners to the back-end 
                  developers, and front-end developers. I can translate designs to the developers and overall bring everyone together.
                </p>
                <p>
                  I am passionate about creating design specs and organizing backlogs and project artifacts, and providing support for the project manager. 
                  Collaboration with my team and guiding them to meet the overall goals set forth by the powers that be. I hold meetings and lead discussions
                  about the project and I advocate for each person on the team.
                </p>
                <p>
                  It's truly the combination of all my skills as a Designer & Developer and Team Leader that make me a valuable asset to any team.
                </p>
              </Col>
            </Row>
          
            <br />

            <Row>
              <Col sm={12}>
                <div className="inner-content text-center mb-5"><h2>Team Leader Skills</h2></div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Team Leadership</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Problem Solving</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Teamwork</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Decision Making</em></p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Time Management</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Determination</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Responsibility</em></p>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div class="inner-content text-center">
                  <div class="c100 p100 center">
                    <span>100%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div>
                  </div>
                  <p><em>Work Ethic</em></p>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>

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
