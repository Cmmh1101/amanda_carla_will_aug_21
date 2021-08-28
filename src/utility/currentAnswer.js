import React, { Component } from "react";
import { EMOJIS } from "../shared/emojis";
import ShuffleArray from "./ShuffleArray";

export default class CurrentAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: Math.floor(Math.random() * EMOJIS.length),
    };
    this.generateAnswers = this.generateAnswers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(i) {
    console.log(i);
    if (Number(i) === this.state.random) console.log("verdad");
    console.log("mierda");
  }

  generateAnswers() {
// INITIALIZE empty 'answers' ARRAY
    const answers = [];
//for() LOOP generates 4 X RANDOM #'S
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * EMOJIS.length);
//generate a RANDOM# from 0-30(EMOJIS.length)...)
      if (answers.includes(num) || num === this.state.random) {
//IF the 'answers' ARRAY includes the RANDOM# sorted in this.state.random OR a RANDOM# already included in the 'answers' ARRAY, RE-ITERATE the for() LOOP
// console.log("or cond Met", num);
        i--;
        continue;
      } else {
//ELSE, RANDOM# is unique, add RANDOM# to 'answers' ARRAY
        answers.push(num);
      }
    }
    answers.push(this.state.random);

    console.log("OG", answers);
//EMOJIS are randomized by utility/ShuffleArray.js
    ShuffleArray(answers);
    console.log("Shuf", answers);
    return answers.map((i) => (
      <button onClick={this.checkAnswer}>{EMOJIS[i].emoji} </button>
    ));
  }

  render() {
    console.log("Correcto", this.state.random);

    return (
      <>
        <h3>La Palabra</h3>
        <p>{EMOJIS[this.state.random].spanish}</p>
        <h3>El Emoji Correcto</h3>
        <p>{EMOJIS[this.state.random].emoji}</p>
        <h3>Los Opciones</h3>
        {this.generateAnswers()}
      </>
    );
  }
}
