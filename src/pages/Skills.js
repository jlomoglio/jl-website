import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import meDevImg from '../assets/vector-me-dev.png';
import meBizImg1 from '../assets/vector-me-biz-1.png';
import meBizImg2 from '../assets/vector-me-biz-2.png';
import meSoftwareImg from '../assets/me-vector-software.png';
import { ProgressBar, Tabs, Tab } from 'react-bootstrap';
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
    height: auto;
    width: 180px;
    float: right !important;
  }

  .bar {
    height: 35px;
    margin-bottom: 15px;
  }

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`;

const designSkills = [
  {
    now: '95',
    label: 'Agile Methodologies'
  },
  {
    now: '95',
    label: 'UI Design'
  },
  {
    now: '95',
    label: 'Wireframes'
  },
  {
    now: '95',
    label: 'Protypes'
  },
  {
    now: '90',
    label: 'User Centered Design'
  },
  {
    now: '90',
    label: 'UX Design'
  },
  {
    now: '90',
    label: 'Empathy'
  },
  {
    now: '90',
    label: 'Research & Interviewing'
  },
  {
    now: '90',
    label: 'Problem Solving'
  },
  {
    now: '90',
    label: 'User Journeys'
  }
];

const devSkills = [
  {
    now: '90',
    label: 'HTML 5'
  },
  {
    now: '90',
    label: 'CSS 3 / SASS / Bootstrap / Material UI'
  },
  {
    now: '90',
    label: 'Responsive & Adaptive Layout'
  },
  {
    now: '90',
    label: 'ES6 & ES7 (Related to Vue & React)'
  },
  {
    now: '90',
    label: 'Vue & React (Fundementals & Components)'
  },
  {
    now: '85',
    label: 'Axios / FireBase & MongoDB'
  },
  {
    now: '80',
    label: 'JavaScript / jQuery'
  },
  {
    now: '60',
    label: 'Git & JIRA'
  },
  {
    now: '50',
    label: 'PHP (Laravel) / Python (Flask)'
  },
  {
    now: '30',
    label: 'ASP.NET & C#'
  }
];

const proSkills = [
  {
    now: '100',
    label: 'Team Leadership'
  },
  {
    now: '100',
    label: 'Creativity'
  },
  {
    now: '100',
    label: 'Problem Solving'
  },
  {
    now: '100',
    label: 'Teamwork'
  },
  {
    now: '100',
    label: 'Decision Making'
  },
  {
    now: '100',
    label: 'Time Management'
  },
  {
    now: '100',
    label: 'Determination'
  },
  {
    now: '100',
    label: 'Responsibility'
  },
  {
    now: '100',
    label: 'Patience'
  },
  {
    now: '100',
    label: 'Work Ethic'
  }
];

const softwareSkills = [
  {
    now: '100',
    label: 'Windows / Mac'
  },
  {
    now: '100',
    label: 'VS Code'
  },
  {
    now: '90',
    label: 'Visual Studio'
  },
  {
    now: '90',
    label: 'Adobe Photoshop CC'
  },
  {
    now: '90',
    label: 'Balsamiq Markup'
  },
  {
    now: '80',
    label: 'Adobe Illustrator CC'
  },
  {
    now: '75',
    label: 'Postman'
  },
  {
    now: '65',
    label: 'Sketch'
  },
  {
    now: '45',
    label: 'GIT / SourceTree'
  },
  {
    now: '40',
    label: 'JIRA'
  },
];

const Skills = () => (
  <Styles>
    <div className="page">
      <Container>
        <Row>
          <Col style={{ marginBottom: '-100px'}}>
            <Tabs defaultActiveKey="design">
              <Tab eventKey="design" title="Design">
                <Row style={{ marginTop: '20px'}}>
                  <Col sm={12} md={8}>
                    {
                      designSkills.map((skill, index) => (
                        <ProgressBar key={index} now={skill.now} label={skill.label} className="bar" />
                      ))
                    }
                  </Col>
                  <Col sm={12} md={4} className="d-none d-sm-block">
                    <img className="me-photo" src={meSoftwareImg} alt="dev" />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="dev" title="Development">
                <Row style={{ marginTop: '20px'}}>
                  <Col sm={12} md={8}>
                    {
                      devSkills.map((skill, index) => (
                        <ProgressBar key={index} now={skill.now} label={skill.label} className="bar" />
                      ))
                    }
                  </Col>
                  <Col sm={12} md={4} className="d-none d-sm-block">
                    <img className="me-photo" src={meDevImg} alt="dev" />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="pro" title="Professional">
                <Row style={{ marginTop: '20px'}}>
                  <Col sm={12} md={8}>
                    {
                      proSkills.map((skill, index) => (
                        <ProgressBar key={index} now={skill.now} label={skill.label} className="bar" />
                      ))
                    }
                  </Col>
                  <Col sm={12} md={4} className="d-none d-sm-block">
                    <img className="me-photo" src={meBizImg2} alt="dev" />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="soft" title="Software">
                <Row style={{ marginTop: '20px'}}>
                  <Col sm={12} md={8}>
                    {
                      softwareSkills.map((skill, index) => (
                        <ProgressBar key={index} now={skill.now} label={skill.label} className="bar" />
                      ))
                    }
                  </Col>
                  <Col sm={12} md={4} className="d-none d-sm-block">
                    <img className="me-photo" src={meBizImg1} alt="dev" />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
            <br />
          </Col>
        </Row>
        <br /><br />
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
      </Container>
    </div>
  </Styles>
);

export default lifecycle(methods)(Skills);