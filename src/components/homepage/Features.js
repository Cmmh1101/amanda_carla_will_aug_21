import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto about">
            <h2>
              <i class="fa fa-beer" aria-hidden="true" />
              About the App
            </h2>
            <p>
              It's time to brush up on your Spanish vocabulary! Spanish words in
              jars will fall from the sky. Your mission is to match the word
              with the correct emoji.
            </p>
            <p>
              {" "}
              Be careful, though! If the jar reaches the bottom of the screen
              and has not been matched, the jar will be smashed on the ground
              and the preserves will be wasted! Can you save them all? If you
              smash 5 jars, the game is over and you'll have to try again.
            </p>
            <div className="buttons">
              <Link to="/gamepage">Play Now</Link>
              <Link to="/">See Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
