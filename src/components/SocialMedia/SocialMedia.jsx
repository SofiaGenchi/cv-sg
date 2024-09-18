import React from "react";
import "./SocialMedia.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className="stick_follow_icon">
            <ul>
                <li>
                    <a href="https://wa.me/5491168680803" target="_blank"><FaWhatsapp /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sofiagenchi"
                        target="_blank"><FaLinkedin /></a>
                </li>
            </ul>
            <p>Follow Me</p>
        </div>
    );
}

export default SocialMedia;
