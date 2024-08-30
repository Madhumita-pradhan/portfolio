import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../others/Particle";
import welcome from "../assets/welcome.svg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import img1 from "../assets/img1.svg";


function Home2() {
    return (
        <>
        {/* <Header/> */}
        <Container  fluid className="welcome">
          
            <Container>
            <Particle/>
                {/* <h2 className="project-heading">Welcome to my Portfolio</h2> */}
                <img src={welcome} className=""  alt="avatar" width={'50%'} height={'40%'} />
            </Container>
        </Container>
        {/* <Footer/> */}
        </>
    );
}
export default Home2;