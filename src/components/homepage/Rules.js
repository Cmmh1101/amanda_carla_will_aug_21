import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const Rules = () => {
  return (
    <>
      <section className="rules_section">
        <div className="container rules_container">
          <div className="row">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-300%)",
              }}
              delay="4500"
              className="col-lg-10 mx-auto"
            >
              <h2>
                <i class="fa fa-beer" aria-hidden="true" />
                Game Rules
              </h2>
              <div className="col-12 d-flex flex-wrap">
                <div className="col-12 col-md-6">
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    It's time to brush up on your Spanish vocabulary! Spanish
                    words
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Be careful, though! If the jar reaches the bottom of the
                    screen
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Be careful, though! If the jar reaches the bottom of the
                    screen
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Be careful, though! If the jar reaches the bottom of the
                    screen
                  </p>
                </div>
                <div className=" col-12 col-md-6">
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    It's time to brush up on your Spanish vocabulary! Spanish
                    words
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Be careful, though! If the jar reaches the bottom of the
                    screen
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    It's time to brush up on your Spanish vocabulary! Spanish
                    words
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Be careful, though! If the jar reaches the bottom of the
                    screen
                  </p>
                </div>
              </div>

              <div className="buttons">
                <Link to="/gamepage">Play Now</Link>
              </div>
            </FadeTransform>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rules;
