import React from "react";
import GameArea from "../utility/GameArea";

function Emojis() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col play_title">
            <h1>Let's Play!</h1>
            <GameArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default Emojis;
