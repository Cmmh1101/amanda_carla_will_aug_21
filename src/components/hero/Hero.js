import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

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
                The best plate to have FUN while testing your Spanish skills!
              </p>

              <Link to="/gamepage">
                <i className="fa fa-hand-o-right" />
                Play
              </Link>
            </FadeTransform>
          </div>
        </div>
      </div>
      <div className="hero_bg"></div>
      <div className="jar_bg">
        <img src="../images/glassjar.png" alt="" />
      </div>
      <div className="broken_jar_bg">
        <img src="../images/brokenjar.png" alt="" />
      </div>
    </Jumbotron>
  </>
);

export default Hero;
