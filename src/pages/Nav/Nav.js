import React from "react";

function Nav(props) {
    const tabs = ['about', 'projects', 'contact'];

    return (
        <nav className="nav">
            <ul className="flex-row nav-list">
                {tabs.map((tab) => (
                    <li
                        className="mx-1"
                        key={tab}
                    >
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                            >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;