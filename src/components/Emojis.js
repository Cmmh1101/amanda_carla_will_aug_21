import React from "react";
import CurrentAnswer from "../utility/currentAnswer";

function Emojis() {
  return (
    <>
      <h1>This is a testing ground for functions to go into PlayComponent</h1>
      <h3>La Palabra</h3>
      <CurrentAnswer />
      <h3>El Emoji Correcto</h3>
      <span role="image" aria-label="current correct emoji"></span>
    </>
  );
}

export default Emojis;
