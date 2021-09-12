import React from "react";

function Projects () {
    return(
        <>
         <div id="mywork" className="search">
                <button id="project"><a href="https://github.com/uot-project-grp/project01-calorie-tracker/"><img src="calorie-tracker.png" alt="calorie-tracker" className="float-right" /></a> </button>
                <h2 className="headertwo">Calorie Tracker - Group Project</h2>
                <p>
                    This was an application that allows its users to easily manage their calories consumed over a given time.
                </p>
            </div>
            <div id="mywork" className="search">
                <h2 className="headertwo">WasteAway - Group Project</h2>
                <p>
                A web application which allows business owners to efficiently track the quantitative value and reports of products purchased, used, and wasted in order to be more economically and ecologically conscious.
                    <a href="https://github.com/Group05-Project02/waste-management/">View Repository</a> <a href="https://waste-management-project2.herokuapp.com/">View deployed project</a> </p>
            </div>
        </>
    )
}

export default Projects 