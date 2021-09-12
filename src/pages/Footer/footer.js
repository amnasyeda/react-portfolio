import React from "react";
import githubicon from "./css/github.jpeg";
import linkedinicon from "./css/linkedin.png";

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-flex">
                <div className="footer-content">
                    <a id="footerLink" href="https://github.com/amnasyeda/" target="_blank">
                        <img alt="github" src={githubicon} width="30px"></img>
                    </a>
                    <a id="footerLink" href="https://ca.linkedin.com/in/amna-syeda-064191146/" target="_blank">
                        <img alt="linkedin" src={linkedinicon} width="30px"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;