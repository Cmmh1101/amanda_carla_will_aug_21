import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <section className="layout_section">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto about">
              <h2>
                <i class="fa fa-beer" aria-hidden="true" />
                Features
              </h2>
              <p>
                It's time to brush up on your Spanish vocabulary! Spanish words
                in jars will fall from the sky. Your mission is to match the
                word with the correct emoji.
              </p>
              <p>
                {" "}
                Be careful, though! If the jar reaches the bottom of the screen
                and has not been matched, the jar will be smashed on the ground
                and the preserves will be wasted! Can you save them all? If you
                smash 5 jars, the game is over and you'll have to try again.
              </p>
              <div className="buttons">
                <Link to="/">Play</Link>
                <Link to="/">Demo</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto kitchen_bg">
          <img src="../images/basekitchen.png" alt="" />
          <div className="overlay" />
        </div>
      </section>
    </>
  );
};

export default Layout;
