import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <>
      <section className="rules_section">
        <div className="container rules_container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2>
                Game <span className="strong_word">Rules</span>
              </h2>
              <hr />
              <div className="col-12 rules_area">
                <div className="col-12 col-md-6 pr-lg-4">
                  <p>It's time to brush up on your Spanish vocabulary.</p>
                  <p>
                    If you'd prefer, you could instead choose to brush up on
                    your English vocabulary.
                  </p>
                  <p>
                    Be careful, though! If the timer runs out, you will lose a
                    life! Once you've lost 5 lives, it's game over.
                  </p>
                  <br />
                </div>
                <div className=" col-12 col-md-6 pl-lg-4">
                  <p>¡Es hora de repasar tu vocabulario en español!</p>
                  <p>
                    Si lo prefiere, puede optar por repasar su vocabulario en
                    inglés.
                  </p>
                  <p>
                    ¡Ten cuidado! Si se acaba el tiempo, ¡perderás una vida! Una
                    vez que pierdas 5 vidas, se acaba el juego.
                  </p>
                </div>
              </div>

              <div className="buttons">
                <Link to="/gamepage">Play Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rules;
