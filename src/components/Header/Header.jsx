import React from "react";
import "./Header.css";
import SocialMedia from "../SocialMedia/SocialMedia";

const Header = () => {
  return (
    <header id="header" className="header">
      <SocialMedia />
      <div className="header-content">
        <div className="header-left">
          <div class="terminal-loader">
            <div class="terminal-header">
              <div class="terminal-title">Welcome!</div>
              <div class="terminal-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
              </div>
            </div>
            <div class="text">I'm a Web Developer...</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
