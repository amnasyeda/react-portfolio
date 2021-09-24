import "./style.css";

const Works = () => {
  return (

<>
<h1>My Recent Projects</h1>

    <div id="mywork" className="search">
    <button id="budgettracker"><a href="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/budget.jpeg"><img src="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/budget.jpeg" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo"> Budget Tracker</h2>
    <p>
    An application that allows the user to track their budget either online or offline. <a href='https://budget-tracker2397.herokuapp.com/'>Click here to view deployed project</a> <a href='https://github.com/amnasyeda/budget-tracker/'>GitHub Repository</a>
    </p>
</div>

<div id="mywork" className="search">
    <button id="socialnetwork"><a href="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/social-network.jpeg"><img src="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/social-network.jpeg" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo">Social Network API</h2>
    <p>
    The backend for a social network API application which allows users to create, store, update, and remove their thoughts as well as react to the thoughts of their friends. <a href='https://github.com/amnasyeda/social-network-api/'>GitHub Repository</a>
    </p>
</div>

<div id="mywork" className="search">
    <button id="workday"><a href="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/schedule.png"><img src="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/schedule.png" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo"> Work Day Scheduler</h2>
    <p>
    A simple calendar application which permits users to type and save important tasks for every hour of the working day. <a href='https://github.com/amnasyeda/work-day-scheduler/'>Click here to view deployed project</a> <a href='https://github.com/amnasyeda/work-day-scheduler/'>GitHub Repository</a>
    </p>
</div>

<div id="mywork" className="search">
    <button id="codequiz"><a href="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/quiz.jpeg"><img src="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/quiz.jpeg" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo"> Code Quiz</h2>
    <p>
    A timed JavaScript quiz composed of five multiple choice questions. <a href='https://amnasyeda.github.io/code-quiz/'>Click here to view deployed project</a> <a href='https://github.com/amnasyeda/work-day-scheduler/'>GitHub Repository</a>
    </p>
</div>

<div id="mywork" className="search">
    <button id="calorietracker"><a href="https://raw.githubusercontent.com/amnasyeda/professional-portfolio/main/assets/images/calorie-tracker.png"><img src="https://raw.githubusercontent.com/amnasyeda/professional-portfolio/main/assets/images/calorie-tracker.png" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo"> Calorie Tracker - Group Project</h2>
    <p>
    An application which allows users to keep track of their calorie intake. <a href="https://uot-project-grp.github.io/project01-calorie-tracker/">Click here to view deployed project</a> <a href="https://github.com/uot-project-grp/project01-calorie-tracker">GitHub Repository</a>
    </p>
</div>

<div id="mywork" className="search">
    <button id="wasteaway"><a href="https://raw.githubusercontent.com/amnasyeda/professional-portfolio/main/assets/images/wasteaway.png"><img src="https://raw.githubusercontent.com/amnasyeda/professional-portfolio/main/assets/images/wasteaway.png" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo"> WasteAway Waste Management - Group Project</h2>
    <p>
    A web application which allows business owners to efficiently track the quantitative value and reports of products purchased, used, and wasted in order to be more economically and ecologically conscious. <a href="https://waste-management-project2.herokuapp.com/">Click here to view deployed project</a> <a href="https://github.com/Group05-Project02/waste-management">GitHub Repository</a>
    </p>
</div>

<div id="mywork" className="search">
    <button id="vintage-vinyl"><a href="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/vintage-vinyl.png"><img src="https://raw.githubusercontent.com/amnasyeda/react-portfolio/old-files-before-losing-/public/css/vintage-vinyl.png" alt="picture" className="float-right" /></a> </button>
    <h2 className="headertwo"> Vintage Vinyl Records - Group Project</h2>
    <p>
    A web application which allows the user to browse through, save, and securely purchase available vintage records. <a href="https://vintage-vinyls.herokuapp.com/">Click here to view deployed project</a> <a href="https://github.com/group01-project03/vintage-vinyl-records/">GitHub Repository</a>
    </p>
</div>
</>
)
}



/* import React from "react";

function Project () {
    const projects = [
        {
          pagelink: 'https://budget-tracker2397.herokuapp.com/',
          title: 'Budget Tracker',
          description: 'An application that allows the user to track their budget either online or offline.',
          github: 'https://github.com/amnasyeda/budget-tracker/'
        },
        {
          pagelink: 'https://github.com/amnasyeda/social-network-api/',
          title: 'Social Network API',
          description: 'The backend for a social network API application which allows users to create, store, update, and remove their thoughts as well as react to the thoughts of their friends.',
          github: 'https://github.com/amnasyeda/social-network-api/'
        },
        {
          pagelink: 'https://github.com/amnasyeda/work-day-scheduler/',
          title: "Work Day Scheduler",
          description: 'A simple calendar application which permits users to type and save important tasks for every hour of the working day.',
          github: 'https://github.com/amnasyeda/work-day-scheduler/'
        },
        {
          pagelink: 'https://amnasyeda.github.io/code-quiz/',
          title: 'Code Quiz',
          description: 'A timed JavaScript quiz composed of five multiple choice questions.',
          github: 'https://github.com/amnasyeda/code-quiz/'
        },
    ]

    function Click (link) {
        window.open(link, '_blank');
      }

    return (
        <section id="projects">
        <h1 className="title-2">Projects</h1>  
        <div className="projects">
          {projects.map((project, i) => (
            <div className="project" key={i} style={{backgroundImage: `url(${project.image})`}}>
              <a href={project.pageLink} target="_blank" rel="noreferrer" className="work-container">
                  <div className="project-info" >
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-info-icons">
                        <span onClick={() => Click(project.github)} className="wii-link"><i className="fab fa-github"></i></span>
                        <span onClick={() => Click(project.pageLink)} className="wii-link"><i className="fas fa-globe"></i></span>
                    </div>
                  </div>
              </a>
            </div>
          ))}
        </div>  
        </section>
      )
    }
*/
export default Works;