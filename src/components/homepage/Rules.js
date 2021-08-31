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
                    It's time to brush up on your Spanish vocabulary.
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    If you'd prefer, you could instead choose to brush up on your English vocabulary with English words.
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Be careful, though! If the timer runs out, you've broken a jar and will lose a life! Once you've "broken" 5 jars, it's game over.
                  </p>
                  <br />
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                      Save multiple jars in a row or have extra lives at the end of the game for bonus points.
                  </p>
                </div>
                <div className=" col-12 col-md-6">
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    ¡Es hora de repasar tu vocabulario en español!
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Si lo prefiere, puede optar por repasar su vocabulario en inglés con palabras en inglés.
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    ¡Pero ten cuidado! Si se acaba el tiempo, ¡has roto un frasco y perderás una vida! Una vez que hayas "roto" 5 frascos, se acabó el juego.
                  </p>
                  <p>
                    <i class="fa fa-beer rule_icon" aria-hidden="true" />
                    Guarde varios frascos seguidos o tenga vidas extra al final del juego para obtener puntos de bonificación.
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
