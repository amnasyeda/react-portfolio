import React from "react";
import {NavLink} from "react-router-dom"

function Nav () {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to ='/'>
                        Home
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/projects'>
                        Projects
                    </NavLink>


                </nav>


            </div>

        </header>
    )
}

export default Nav