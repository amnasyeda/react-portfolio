import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nice to meet you. My name is <span className="purple">Amna Syeda </span>
            and I'm from<span className="purple"> Toronto, Canada.</span>
            <br />I am a junior web-developer and I am currectly working on small projects as a freelancer.
            <br />
            <br />
            Apart from coding, some other activities that I love include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Crime Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> JDM and American Muscle Cars
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I also love to read novels :)"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
