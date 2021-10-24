import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blog from "../../Assets/Projects/blog.jpeg";
import books from "../../Assets/Projects/books.jpeg";
import calorietracker from "../../Assets/Projects/calorietracker.jpeg";
import employeetracker from "../../Assets/Projects/employeetracker.jpeg";
import vintagevinyl from "../../Assets/Projects/vintagevinyl.jpeg";
import wastemanagement from "../../Assets/Projects/wastemanagement.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vintagevinyl}
              isBlog={false}
              title="Vintage Vinyl Records"
              description="An e-commerce web application which allows the user to browse through various records, save items to their cart, and checkout their items for purchase."
              link="https://github.com/group01-project03/vintage-vinyl-records"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wastemanagement}
              isBlog={false}
              title="WasteAway - Waste Management"
              description="A web application which allows business owners to efficiently track the quantitative value and reports of products purchased, used, and wasted in order to be more economically and ecologically conscious."
              link="https://github.com/Group05-Project02/waste-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="Book Search Engine"
              description="An application which allows users to search for and view books using APIs."
              link="https://github.com/amnasyeda/book-search-engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Tech Blog"
              description="A blogging application made using MySQL2, Handlebars, and JavaScript which allows developers to publish posts in their blog and engage in blogs posted by others as well."
              link="https://github.com/amnasyeda/tech-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeetracker}
              isBlog={false}
              title="Employee Tracker"
              description="A command-line application which uses Node.js, Inquirer, and MySql to save information for employees at a retail corporation."
              link="https://github.com/amnasyeda/employee-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calorietracker}
              isBlog={false}
              title="Counting Calories - Calorie Tracker"
              description="An application that allows its users to easily manage their calories consumed over a given time."
              link="https://github.com/uot-project-grp/project01-calorie-tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
