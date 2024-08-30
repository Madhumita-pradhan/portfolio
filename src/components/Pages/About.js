import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../others/Particle";
// import Github from "./Github";
import Techstack from ".././others/Techstacks";
// import Aboutcard from "./AboutCard";
import laptopImg from "../assets/img1.png";
import Toolstacks from "../others/Toolstacks";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am <span className="purple">Madhumita </span>
                    from <span className="purple">Bhadrak, Odisha.</span><br />
                    <br />I am a former student of <span className="purple">Bhadrak Autonomous College,</span> Bhadrak.<br/><br/>
                    where I pursued my passion for Computer Science,<br/> 
                    and it's here that I laid the foundation for my journey into the world of 
                     &nbsp; <span className="purple">software development.</span> 
                    <br /><br/>
                    I am currently employed as a software developer at
                    <span className="purple"> Flaplive Innovation Pvt Ltd .</span>
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Listen Music
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Watching Motivational Videos
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Travelling
                    </li>
                  </ul>

                  <p style={{ color: "#7d822b" }}>
                    "Code is not just lines; it's the art of turning imagination into innovation, and keystrokes into progress!" {" "}
                  </p>
                  <footer className="blockquote-footer">Madhumita</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px", height: '500px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstacks />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
