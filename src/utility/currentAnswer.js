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
    // this.getNewAnswer = this.getNewAnswer.bind(this);
  }

  checkAnswer(i) {
    console.log(i);
    if (Number(i) === this.state.random) console.log("verdad");
    console.log("mierda");
  }
  //EMOJIS are randomized by utility/ShuffleArray.js
  generateAnswers() {
    const answers = [];
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * EMOJIS.length);
      if (answers.includes(num) || num === this.state.random) {
        // console.log("or cond Met", num);
        i--;
        continue;
      } else {
        answers.push(num);
      }
    }
    answers.push(this.state.random);

    console.log("OG", answers);
    ShuffleArray(answers);
    console.log("Shuf", answers);
    return answers.map((i) => (
      <button onClick={this.checkAnswer}>{EMOJIS[i].emoji} </button>
    ));
  }

  render() {
    // console.log("Correcto", this.state.random);

    return (
      <>
        <button onClick={this.refreshPage}>Restart</button>
        <h3>Puntaje</h3>
        <p>{this.state.score}</p>
        <h3>Las Palabras Restante</h3>
        <p>{this.state.remainingWords}</p>
        <h3>Las Vidas</h3>
        <p>{this.state.lives}</p>
        <h3>La Palabra</h3>
        <p>{EMOJIS[this.state.random].spanish}</p>
        {/* <h3>El Emoji Correcto</h3>
        <p>{EMOJIS[this.state.random].emoji}</p> */}

        <h3>Los Opciones</h3>
        {this.generateAnswers()}
      </>
    );
  }
}
