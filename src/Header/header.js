import React, { useState } from 'react';
import Nav from '../../pages/Nav';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "about":
                return <About></About>
            case "projects":
                return <Projects></Projects>
            case "contact":
                return <Contact></Contact>
            default:
                return <About></About>
        }
    };
    return (
        <header className="flex-row px-1">
            <div className="flex-row">
                <h1 className="flex-row">
                    <a href="/react-portfolio">
                        Amna Syeda
                    </a>
                </h1>
                <div className="flex-row">
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
            <div className="flex-row mq-pages">
                {
                    renderPage()
                }
            </div>
        </header>
    )
};

export default Header;