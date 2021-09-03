import React from "react";
import { Link } from "react-router-dom";

import YoutubeEmbed from "../YoutubeEmbed";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto about">
          
            <h2>About the <span className="strong_word">App</span></h2>
            <hr />
            <p>
              It's time to brush up on your Spanish vocabulary! Spanish words in
              jars will be heating up. Your mission is to match the word with
              the correct emoji.
            </p>
            <p>
              {" "}
              Be careful, though! If the timer runs out and the jar name and
              picture have not been matched, the jar will be explode and the
              preserves will be wasted! Can you save them all? If you break 5
              jars, the game is over and you'll have to try again.
            </p>
            <div className="buttons">
              <Link to="/gamepage">Play Now</Link>
            </div>
            <br />
            <div className="app_demo">
              <h3>Demo</h3>
              <YoutubeEmbed embedId="1uXCEuEibkI" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
