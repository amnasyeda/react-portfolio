import { Link, page } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Amna</p>
          <p>I am a Software development Student</p>
        </h1>
        <Link to="about">
          <button>About</button>
        </Link>
      </div>
      <div className="me">
        <img
          src={`${process.env.PUBLIC_URL}/my-logo.png`}
          alt="picture"
        />
      </div>
    </div>
  );
};










/*import React, { page } from 'react';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Project from '../Project/index';
import Contact from '../Contact/index'; 

const Home = () => (

  <div className="nav-wrapper">
    <nav className="nav">
      <Link to="/" className="nav-link"><p>Home</p></Link>
      <Link to="/project" className="nav-link"><p>Projects</p></Link>
      <Link to="/contact" className="nav-link"><p>Contact</p></Link>
    </nav>
  </div>


);

*/

export default Home;