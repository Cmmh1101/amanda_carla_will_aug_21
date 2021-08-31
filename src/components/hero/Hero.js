import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform, Fade } from "react-animation-components";

const Hero = () => (
  <>
    <Jumbotron className="jumbo-fluid hero m-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto hero-text">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-300%)",
              }}
              delay="1000"
            >
              <h1>Welcome to The Jar Game</h1>
              <p>
                The best place to have FUN while testing your Spanish skills!
              </p>

              <div className="buttons">
                <Link to="/gamepage">
                  <i className="fa fa-hand-o-right" />
                  Play Now
                </Link>
              </div>
            </FadeTransform>
          </div>
        </div>
      </div>
      <div className="hero_bg"></div>
      <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-300%)",
              }}
              delay="1500" className="jar_bg">
        <img src="../images/glassjar.png" alt="" />
      </FadeTransform>
      <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-300%)",
              }}
              delay="2000" in className="broken_jar_bg">
        <img src="../images/brokenjar.png" alt="" />
      </FadeTransform>
    </Jumbotron>
  </>
);

export default Hero;
