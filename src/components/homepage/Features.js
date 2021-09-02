import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import YoutubeEmbed from "../YoutubeEmbed";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-300%)",
              }}
              delay="3500" className="col-10 mx-auto about">
            <h2>
              <i class="fa fa-beer" aria-hidden="true" />
              About the App
            </h2>
            <p>
              It's time to brush up on your Spanish vocabulary! Spanish words in
              jars will be heating up. Your mission is to match the word
              with the correct emoji.
            </p>
            <p>
              {" "}
              Be careful, though! If the timer runs out and the jar name 
              and picture have not been matched, the jar will be explode
              and the preserves will be wasted! Can you save them all? If you
              break 5 jars, the game is over and you'll have to try again.
            </p>
            <div className="buttons">
              <Link to="/gamepage">Play Now</Link>
            </div>
            <br />
            <div className="App">
              <h1>Demo</h1>
              <YoutubeEmbed embedId="1uXCEuEibkI" />
            </div>
          </FadeTransform>
        </div>
      </div>
    </>
  );
};

export default Features;
