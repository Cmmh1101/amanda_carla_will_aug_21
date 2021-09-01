import React, { useEffect, useState } from "react";
import ShuffleArray from "./ShuffleArray";
import { EMOJIS } from "../shared/emojis";

export const GenerateAnswers = (props) => {
  const [answers,setAnswers] = useState([])
  //const answers = [];
  //for() LOOP generates 4 X RANDOM #'S WRONG ANSWERS
  /* 
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
    // console.log("Shuf", answers); */

  useEffect(() => {
    const incorrectAnswers = []
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * EMOJIS.length);
      if (incorrectAnswers.includes(num) || num === props.random) {
        // console.log("or cond Met", num);
        i--;
        continue;
      } else {
        incorrectAnswers.push(num);
        console.log("current wrong answers", incorrectAnswers);
      }
    }
    incorrectAnswers.push(props.random);
    console.log("Add correct answer", props.random)
    setAnswers(ShuffleArray(incorrectAnswers));

  }, [props.random]);

  useEffect(() => {
    console.log("current Answers", answers, props.random)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers])


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
