import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import ValueCard from '../components/ValueCard';
import jlcLogo from '../assets/jlc_logo.png';
import luminaLogo from '../assets/lumina_logo.png';
import attLogo from '../assets/att_logo.png';
import seacretLogo from '../assets/seacret_logo.png';
import jpmorganLogo from '../assets/jpmorgan_logo.png';
import it1Logo from '../assets/it1_logo.png';
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

  .list-item {
    display: inline-block;
    margin-bottom: 5px;
  }

  .center {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`;

const JLC = () => (
  <React.Fragment>
    <span className="job-date">Nov 2017 - Present | 1997 - 2009</span>
    <br />
    <span className="job-title bold">Freelance Design & Development</span>
    <br /><br />
    <span className="bold">Project:</span>
    <p>
      Various project types in a variety of diffrent fields and industries.
    </p>

    <span className="list-item">- Real Estate web sites & photography</span>
    <span className="list-item">- The Home Resource Center Web Portal</span>
    <span className="list-item">- InfoSearch Web portal (Clear Channel)</span>
    <span className="list-item">- Brochures, Posters and RepoGraphics</span>
    <span className="list-item">- Custom Home Design (Skeen Homes)</span>
    <span className="list-item">- Construction web design</span>
    <span className="list-item">- Photo art and digital compositing</span>
    <span className="list-item">- Game Design & Development (Unity)</span>
    <span className="list-item">- 3D Modeling (3DS MAX, Blender, Mya)</span>
    <span className="list-item">- Drafting & Engineering AutoCAD</span>
    <br /><br />
    <span className="bold">Technologies Used:</span>
    <p>
      HTML 5, CSS3/SASS, JavaScript, jQuery, Vue, React, PHP (Laravel), Python (Flask)
    </p>
  </React.Fragment>
);

const Lumina = () => (
  <React.Fragment>
    <span className="job-date">March 2017 - Nov 2017 (Contract)</span>
    <br />
    <span className="job-title bold">UI/UX Designer & Developer</span>
    <br /><br />
    <span className="bold">Project:</span>
    <p>
      Custom Platform for 3D Simulated Educational Modules.
    </p>

    <span className="list-item">- SimCore Simulation Platform Core</span>
    <span className="list-item">- SimMod Simulation Learning Modules</span>
    <span className="list-item">- SimGen Simulation Automated Data</span>
    <br /><br />
    <span className="list-item">- UI/UX Design</span>
    <span className="list-item">- Frontend Development</span>
    <span className="list-item">- Designed Custom framework with Vue.js</span>
    <span className="list-item">- Implemented new design processes</span>
    <span className="list-item">- Designed Pattern Library</span>
    <span className="list-item">- Managed Project & Backlog</span>
    <span className="list-item">- Agile Team Lead</span>
    <br /><br />
    <span className="bold">Technologies Used:</span>
    <p>
      HTML 5, CSS3/SASS, Bootstrap, ES6, Vue, Vuex, Axios, PHP
    </p>
  </React.Fragment>
);

const ATT = () => (
  <React.Fragment>
    <span className="job-date">March 2016 - Dec 2016 (Contract)</span>
    <br />
    <span className="job-title bold">UI/UX Designer & Developer</span>
    <br /><br />
    <span className="bold">Project:</span>
    <p>
      Custom Enterprise Reporting System + Company wide database server integration.
    </p>

    <span className="list-item">- UI/UX Design</span>
    <span className="list-item">- Frontend Development</span>
    <span className="list-item">- Developed custom UI Components</span>
    <span className="list-item">- Designed a custom drag-n-drop UI</span>
    <span className="list-item">- Frontend Design Subject Matter Expert</span>
    <span className="list-item">- Implemented new design processes</span>
    <span className="list-item">- Designed Pattern Library</span>
    <span className="list-item">- Project documnetation</span>
    <span className="list-item">- Backlog & Sprint Steward</span>
    <span className="list-item">- Project Presentations & Demos</span>
    <span className="list-item">- Agile Team Lead</span>
    <br /><br />
    <span className="bold">Technologies Used:</span>
    <p>
      HTML 5, CSS3, Bootstrap, JavaScript, jQuery, ASP.Net
    </p>
  </React.Fragment>
);

const Seacret = () => (
  <React.Fragment>
    <span className="job-date">Feb 2015 - Oct 2015 (Contract)</span>
    <br />
    <span className="job-title bold">UI/UX Designer & Developer</span>
    <br /><br />
    <span className="bold">Project:</span>
    <p>
      Custom Enterprise Agent Portal for multi-level marketing agencey.
    </p>

    <span className="list-item">- UI/UX Design</span>
    <span className="list-item">- Frontend Development</span>
    <span className="list-item">- Developed custom UI Components</span>
    <span className="list-item">- Designed a custom drag-n-drop UI</span>
    <span className="list-item">- Designed a custom sales dashboard</span>
    <span className="list-item">- Implemented new design processes</span>
    <span className="list-item">- Designed Pattern Library</span>
    <span className="list-item">- Designed Marketing Brouchure visuals</span>
    <span className="list-item">- Designed Mobile UI for Convention App </span>
    <span className="list-item">- Project Presentations & Demos</span>
    <span className="list-item">- Built automated promotion generator</span>
    <br /><br />
    <span className="bold">Technologies Used:</span>
    <p>
      HTML 5, CSS3, Bootstrap, JavaScript, jQuery, ASP.Net
    </p>
  </React.Fragment>
);

const JPMorgan = () => (
  <React.Fragment>
    <span className="job-date">Oct 2012 - Sept 2014</span>
    <br />
    <span className="job-title bold">UI/UX Designer & Developer</span>
    <br /><br />
    <span className="bold">Project:</span>
    <p>
      Custom Enterprise Financial Dashboard System for Treasury Securities.
    </p>

    <span className="list-item">- UI/UX Design</span>
    <span className="list-item">- Frontend Development</span>
    <span className="list-item">- Designed & Developed Custom UI Components</span>
    <span className="list-item">- Lean Agile Design Team Member</span>
    <span className="list-item">- Designed a Custom Executive Dashboard</span>
    <span className="list-item">- Implemented new design processes</span>
    <span className="list-item">- Designed Custom UI Pattern Library</span>
    <span className="list-item">- Frontend Design Subject Matter Expert</span>
    <span className="list-item">- Designed Mobile UI for Executive Reports</span>
    <span className="list-item">- Project Presentations & Demos</span>
    <span className="list-item">- Developed custom application framework</span>
    <br /><br />
    <span className="bold">Technologies Used:</span>
    <p>
      HTML 5, CSS, JavaScript, jQuery, AngularJS, Kendo UI, Wijimo, ExtJS
    </p>
  </React.Fragment>
);

const It1 = () => (
  <React.Fragment>
    <span className="job-date">Jan 2009 - Sept 2012</span>
    <br />
    <span className="job-title bold">Full-stack Web Developer</span>
    <br /><br />
    <span className="bold">Project:</span>
    <p>
      Web Based Enterprise Help Desk & Sales Force System for national IT service provider and supplier.
    </p>

    <span className="list-item">- Full-stack Development</span>
    <span className="list-item">- Developed custom UI Components</span>
    <span className="list-item">- Designed a custom Help Desk platform</span>
    <span className="list-item">- Designed a custom CRM platform</span>
    <span className="list-item">- Database design and development</span>
    <span className="list-item">- Developed custom application framework</span>
    <span className="list-item">- Designed and built company website</span>
    <span className="list-item">- Setup and managed development servers</span>
    <br /><br />
    <span className="bold">Technologies Used:</span>
    <p>
      HTML, CSS, JavaScript, ColdFusion, PHP, MySQL, MS SQL, Access, LAMP, Yui, PrototypeJS
    </p>
  </React.Fragment>
);

const Work = () => (
  <Styles>
    <div className="page">
      <Row>
        <Col sm={12} md={6} className="pb-4">
          <ValueCard img={jlcLogo} width={60}>
            <JLC />
          </ValueCard>
        </Col>
        <Col sm={12} md={6} className="pb-4">
          <ValueCard img={luminaLogo} width={60}>
            <Lumina />
          </ValueCard>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6} className="pb-4">
          <ValueCard img={attLogo} width={60}>
            <ATT />
          </ValueCard>
        </Col>
        <Col sm={12} md={6} className="pb-4">
          <ValueCard img={seacretLogo} width={60}>
            <Seacret />
          </ValueCard>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6} className="pb-4">
          <ValueCard img={jpmorganLogo} width={60}>
            <JPMorgan />
          </ValueCard>
        </Col>
        <Col sm={12} md={6} className="pb-4">
          <ValueCard img={it1Logo} width={60}>
            <It1 />
          </ValueCard>
        </Col>
      </Row>

      <hr className="mb-4 mt-4" />

      <Row>
        <Col sm={12} className="pb-4">
          <h3>Recommendations</h3>
          <br />
          <div className="box">
            <p>
              I coached Joe and have interacted with him several times since. He is an insightful and
              dynamic technical pro, and his enthusiasm when he is on the chase to a solution is catching.
              He is a frightfully quick learner; he implements changes immediately, but remains perfectly
              willing to challenge the idea until he understands and embraces it (something rare and
              valuable on development teams).
            </p>
            <p>
              His work with Kendo UI was impressive enough that my boss, Pierre Bouchard the CDO, used
              it as a primary exemplar for several other teams facing the same challenges. If I were I to
              build a development team, Joe is an excellent example of the talent, personality and approach
              that would seek out.
            </p>
            <p>
              Enthusiastic, dynamic and talented people share a common opportunity for improvement: Joe
              can be easily distracted by the innate "Ooh! Shiny!" response we all have when faced with a
              new and exciting technology or solution. To me this cannot be considered a weakness; without
              it, we lose the innovative drive that makes Joe invaluable.
            </p>
            <p>
              The opportunity is in tempering the response without eliminating it.
            </p>
            <br />
            <span className="bold">Kevin Wells</span>
            <br />
            <span className="bold">Agile Development Coach</span>
            <br />
            <span className="bold">JPMorgan Chase</span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/analyst-kevin-wells/" target="_blank">Contact</a>
            </span>
          </div>

          <hr className="mb-4 mt-4" />

          <div className="box">
            <p>
              My name is Mosh Manresa, I'm an Associate Director in the Enhanced Client Services (ECS) 
              Organization within AT&T's Sales and Service Management organization. I program manage ECS 
              development, and I lead development on a couple key projects.
            </p>
            <p>
              I brought Joe LoMoglio onto my team in early March 2016 to fulfill a UX design position on a 
              team building a new reporting, metrics, and analytics application for ECS. He was instrumental 
              in bringing the voices of the many stakeholders into the User Experience design of the application. 
              Joe led the development team through the POC and Prototype phases of the project, providing the 
              design artifacts and developing the UI layer of the ASP.NET MVC application.
            </p>
            <p>
              Joe is a very talented and self-driven professional. He has a very methodical approach to design 
              that is evident in the resulting product. He was also willing to learn new skills on the project. 
              Joe will be a welcome addition to any team. 
            </p>
            <br />
            <p>Best Regards,</p>
            
            <span className="bold">Mosh Manresa</span>
            <br />
            <span className="bold">Associate Director</span>
            <br />
            <span className="bold">AT&T Technology and Operations</span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/mosh-manresa-8a02192/" target="_blank">Contact</a>
            </span>
          </div>

          <hr className="mb-4 mt-4" />

          <div className="box">
            <p>
            Please accept my strong recommendation for Joe LoMoglio. Joe worked for me as a Lead Programmer in the development of 3D Learning Simulations. Using an Agile methodology, Joe lead the effort to build a 3D Simulation Generator to simplify and make more consistent the quality of 3D Learning Simulations the company was creating. He led a team of 6 developers and supported development teams in Poland and India. 
            </p>
            <p>
            Joe demonstrated a strong work ethic often working throughout the night to make deadlines. His developers were positively influenced by his example. Joe was able juggle the demands of the client and the need to develop supportable, stable, well documented code.
            </p>
            <p>
            Joe has an in-depth knowledge of front end development. He converted the development team from using HTML5, CSS, and JavaScript to a JavaScript platform that he created, which improved development times significantly and made the development effort more scalable.  
            </p>
            <br />
            
            <span className="bold">Jared J. Snell</span>
            <br />
            <span className="bold">Director of Software Development</span>
            <br />
            <span className="bold">Lumina Datamatics </span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/jared-j-snell-310931/" target="_blank">Contact</a>
            </span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr className="mt-4 mb-4" />
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>References</h3>
          <br />
          <div className="box">
            <span className="bold">Marco James</span>
            <br />
            <span className="bold">Frontend Developer</span>
            <br />
            <span className="bold">Lumina Datamatics (2017)</span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/itsamemarco/" target="_blank">Contact</a>
            </span>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="box">
            <span className="bold">Marvin Elmore</span>
            <br />
            <span className="bold">Senior Front End Developer / Full Stack</span>
            <br />
            <span className="bold">Lumina Datamatics (2017)</span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/marvin-elmore-a2b14132/" target="_blank">Contact</a>
            </span>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="box">
            <span className="bold">Ray Linder</span>
            <br />
            <span className="bold">Senior .NET Developer</span>
            <br />
            <span className="bold">Seacret Direct (2015)</span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/raylinder/" target="_blank">Contact</a>
            </span>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="box">
            <span className="bold">Jason Newberg</span>
            <br />
            <span className="bold">Organizational Coach, Expert Engineer</span>
            <br />
            <span className="bold">JPMorgan Chase (2012 - 2014)</span>
            <br />
            <span className="bold">
              <a href="https://www.linkedin.com/in/jason-newberg/" target="_blank">Contact</a>
            </span>
          </div>
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

export default lifecycle(methods)(Work);