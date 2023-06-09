import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import codeforces from "../../assets/codeforces.png";
import leetcode from "../../assets/leetcode.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/deepansh-mittal-17bba51bb/">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://codeforces.com/profile/deepansh09"><img src={codeforces} alt="" /></a>
                    <a href="https://leetcode.com/deepanshmittal09/"><img src={leetcode} alt="" /></a>
                    <a href="https://github.com/deepanshmittal/fit_club"><img src={github} alt="" /></a>
                </div>
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;
