import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import sprintImg from '../assets/sprint-iteration.png';
import featuresMapImg from '../assets/features_map.png';
import basicWireframeImg from '../assets/basic_wireframe.png';
import hifiCompositeImg from '../assets/hifi_composite.jpg';
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
    width: 100%;
  }

  .bold {
    font-weight: bold;
  }

  .sprint-img {
    width: 100%;
  }

  .features-map-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .basic-wireframe-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .hifi-composite-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

const Process = () => (
  <Styles>
    <div className="page">
      <h1 className="center">My Six Phases of Design and Development</h1>
      <h3 className="pt-4 center mb-4">
        There are several important steps in the design and development process.
        Starting with gathering the initial information, through to the creation 
        of the product, there is a lot that takes place before deployment.
      </h3>
      <hr />
      <h5 className="center mb-5">
        While the exact process varies slightly between projects, the basics remain the same.
      </h5>

      <Row>
        <Col sm={12} className="pb-4 center">
          <img src={sprintImg} className="sprint-img" alt="Discovery" />
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Phase 1: Discovery</h3>
          <p>
            This phase, the phase of discovering and researching, determines how the subsequent phases 
            will look like. The most important task at this point is to get the clear understanding of 
            the purpose and the main goals that need to be set, and the target audience of the project. 
            A development questionnaire helps to develop the best strategy for further project management.
          </p>

          <p>
            A financial dashboard differs from an enterprise reporting system, and a sales portal looks different 
            than a interactive learning module. Different types of applications with different functionality 
            means that different technologies should be used according to the purposes. A well described and 
            detailed plan made on the basis of this pre-development data can protect a team from spending extra 
            resources on solving the unexpected issues such as design changing or adding the functionality that 
            wasn’t initially planned.
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
          <h3>Phase 2: Planning</h3>
          <p>
            Here I develop a features map – similar to a site map, it provides a visual of all the main 
            features and sub-features for the project. This serves a guide as to what features and 
            functionality are need for the project, and is essential to developing a consistent and 
            easy to understand functional flow.
          </p>
          <p>
            On the basis of the information that was gathered together in the previous phase, the features map 
            is created. Here is an example of a features map for a back end admin dashboard:
          </p>
          <img src={featuresMapImg} className="features-map-img" alt="Planning" />
          <p>
            The features map should describe the relations between the main areas of the application. Such 
            representation could help understand how usable the final product will be. It can show the 
            "relationship" between the different views of the application, so it can be determined how easy 
            it will be for the end-user to find the required information or service if he or she starts from 
            the main view. The main reason behind the features map creation is to build a user-friendly and 
            easy to navigate application.
          </p>
          <p>
            The features map allows for an understanding of how the inner structure of the application looks 
            like, but doesn’t describe the user interface. Sometimes, before you start to code or even work on 
            a design, there's a necessity to get approval from a product owner that everything looks fine so 
            you can begin the next phase of developing. 
          </p>
          <p>
            Depending on the complexity of the application, the use of Journey Maps and Personas may be used to 
            further understand the needs and functionality required for the target audience.
          </p>
          <p>
            In this case, the application is simple so all that is required is a wireframe or mock-up. A wireframe 
            should be used regardless of any other artifacts. A wireframe is a visual representation of user 
            interface that you're going to create. But it doesn't contain any design elements such as colors, 
            logos, etc. It only describes the elements that will be added to the view and their location.
          </p>
          <p>Here is a basic example of a wireframe:</p>
          <img src={basicWireframeImg} className="basic-wireframe-img" alt="Wireframe" />
          <p>
            The final task is to select the technology stack - programming language, frameworks, platforms that 
            will be used to develop the application, so that prototypes can be built in the next phase.
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
          <h3>Phase 3: Design</h3>
          <p>
            During the design phase the application takes shape. All the visual elements, such as components 
            and styles and detailed layouts are mocked up into hi-fidelity composites. Once again, all the info 
            that was gathered through the first phase is crucial. The product owner and target audience must be 
            kept in mind while working on a design.
          </p>
          <p>
            The product owner and target audience are given an opportunity to review the designs and to provide 
            feedback on the colors and layout and any other features of the design that they are concerned about.
          </p>
          <img src={hifiCompositeImg} className="hifi-composite-img mt-5 mb-5" alt="Composite" />
          <p>
            After approval of the hi-fidelity composites, prototypes can be built to identify any technical 
            issues and to make sure the technology stack that was chosen is valid for the project.
          </p>
          <p>
            If there are no issues with any of the prototypes then a final review can take place and with approval 
            of the working prototypes, we can move on to start development.
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
          <h3>Phase 4: Development</h3>
          <p>
            This is the phase when the team works on the the actual application and translates 
            the prototypes, design specs and requirements into functional code. Physical specifications are transformed 
            into a solid working and reliable solution. This part requires good management, as each 
            team member is assigned tasks according to his or her skill set. The work of every participant 
            in the process should be closely supervised so that elements created by different people can 
            function properly when combined together. Of course, well-written code substantially reduces 
            the number of test runs and maintenance-related problems.
          </p>
          <p>
            Once all the given tasks for this iteration are completed, the team can then move on to the 
            next phase of the process.
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
          <h3>Phase 5: Testing and Delivery</h3>
          <p>
            Testing is vital, and there's no way around it. This stage allows the development team to see whether 
            everything works as intended. This is the vital phase when they detect potential errors and see if 
            the application meets the initial business goals. QA engineers design and carry out test cases and 
            evaluate exit criteria (by following the scope set in the planning phase). They create bug reports 
            describing detected defects and report to the stakeholders on the test findings and the completion status. 
            Testing may be repeated to check for errors. Stakeholders can also participate in the acceptance testing 
            to give feedback from a user's point of view and see if the software fulfills their requirements.
          </p>
          <p>
            Once all tests are passed, a meeting is held with the design and development team along with the product 
            owner and key members of the target audience to review what is being delivered. Upon approval the application 
            will either start the next iteration beginning with phase 1, or it will move onto the deployment phase.
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
            <h3>Phase 6: Deployment</h3>
            <p>
              The final phase is to deploy the application or parts of the application depending on the project.
              This deployment process is typically handed off to a team or a dedicated person who is responsible 
              for transferring the code to a staging server or a production server.
            </p>
            <p>
              At this point the team moves on to other projects, or works on implementing new features for the 
              application. The team will continue to support and maintain the application and will close any 
              bug tickets that may come up in production.
            </p>
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

export default lifecycle(methods)(Process);