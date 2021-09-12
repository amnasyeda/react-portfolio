import React from "react";

function Projects () {
    const projects = [
        {
          link: 'https://budget-tracker2397.herokuapp.com/',
          title: 'Budget Tracker',
          description: 'An application that allows the user to track their budget either online or offline.',
          image: require(`./css/budget-tracker.png`).default,
          github: 'https://github.com/amnasyeda/budget-tracker/'
        },
        {
          link: 'https://github.com/amnasyeda/social-network-api/',
          title: 'Social Network API',
          description: 'The backend for a social network API application which allows users to create, store, update, and remove their thoughts as well as react to the thoughts of their friends.',
          image: require(``).default,
          github: 'https://github.com/amnasyeda/social-network-api/'
        },
        {
          link: 'https://github.com/amnasyeda/work-day-scheduler/',
          title: "Work Day Scheduler",
          description: 'A simple calendar application which permits users to type and save important tasks for every hour of the working day.',
          image: require().default,
          github: 'https://github.com/amnasyeda/work-day-scheduler/'
        },
        {
          link: 'https://amnasyeda.github.io/code-quiz/',
          title: 'Code Quiz',
          description: 'A timed JavaScript quiz composed of five multiple choice questions.',
          image: require(``).default,
          github: 'https://github.com/amnasyeda/code-quiz/'
        },
    ]

    return (
        <section className="projects">
            <h1 className="project-title">Projects</h1>
            {projectsArr.map((project, idx) => {
                return (
                    <div key={idx} className="card">
                        {}
                        <div className="card-img-top">
                            <img
                                src={project.img}
                                className="projectImgs img-thumbnail mx-1"
                                alt={project.name}
                                key={project.name}
                            >
                            </img>
                        </div>
                        <div className="card-body">
                            <h2 className="projectName card-title">
                                {}
                                <a href={project.deployedApp} className="projectTitle" target="_blank">
                                    {project.name}
                                </a>
                            </h2>

                            {}
                            <p className="card-text">{project.description}</p>

                            {}
                            <a href={project.github} className="githubcard-link" target="_blank">
                                <img alt="github" src={github} width="50px"></img>
                            </a>

                            {}
                            <a href={project.deployedApp} className="linkedin card-link" target="_blank">
                                <img alt={project.name} src={linkedin} width="50px"></img>
                            </a>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Projects;