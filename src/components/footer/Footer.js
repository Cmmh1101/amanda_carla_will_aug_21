import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 footer_btns">
              <div className="buttons">
                <Link to="/gamepage">Game Page</Link>
                <Link to="/">Demo</Link>
              </div>
            </div>
            <div className="col footer_text">
              <span>2021 © All rights reserved | Team Preservar</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
