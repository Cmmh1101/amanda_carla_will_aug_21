import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <>
      <div className="container rules_container">
        <div className="row">
          <div className="col-10 mx-auto">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
