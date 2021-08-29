import React from "react";
import ShuffleArray from "./ShuffleArray";
import { EMOJIS } from "../shared/emojis";

export const GenerateAnswers = (props) => {
  const answers = [];
  //for() LOOP generates 4 X RANDOM #'S WRONG ANSWERS

  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * EMOJIS.length);
    if (answers.includes(num) || num === props.random) {
      // console.log("or cond Met", num);
      i--;
      continue;
    } else {
      answers.push(num);
    }
  }
  answers.push(props.random);

  // console.log("OG", answers);
  ShuffleArray(answers);
  // console.log("Shuf", answers);

  if (props.words === 0 || props.lives === 0) {
    return <></>;
  } else {
    return answers.map((i) => (
      <button className="emojis" key={i} onClick={props.checkAnswer}>
        {EMOJIS[i].emoji}{" "}
      </button>
    ));
  }
};
