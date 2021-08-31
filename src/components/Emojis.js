import React from "react";
import GameArea from "../utility/GameArea";

function Emojis() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col play_title">
            <h1>Let's Play! / ¡Vamos a jugar!</h1>
            <p>Click the picture that matches the word</p>
            <p>Haga clic en la imagen que coincide con la palabra</p>
            <GameArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default Emojis;
