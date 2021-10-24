import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/amna-syeda.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
                   title="Freelance Front-End Developer"
                   date="August 2021 - Present"
              content={[
                "Worked on the development of an E-commerce website",
                "Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.",
                "Created designs and wireframes and turned them into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",
              ]}
            />
            <h3 className="resume-title">Software Development Education</h3>
            <Resumecontent
              title="University of Toronto School of Continuing Studies"
              content={[
                "Completed course and obtained certificate to become a full-stack web developer.",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title"> Primary Education</h3>
            <Resumecontent
               title="University of Toronto, graduated with honors, completed a double major in human biology and neuroscience."
               date="2017 - 2021"
              content={[` ${cgpa} ${sem}`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Syeda, A. (2021, May). Prenatal Maternal Stress: Impact on the Intellectual Abilities and Behaviours of Young Children. Retrieved October 15, 2021.",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                //`Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "GitHub Open Source Contributor",
                
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;