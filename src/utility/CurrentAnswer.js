import React, { Component } from "react";
import { EMOJIS } from "../shared/emojis";
import ShuffleArray from "./ShuffleArray";

export default class CurrentAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //INITIALIZING the random PROPERTY of the STATE as a RANDOM# from 1-30
      random: Math.floor(Math.random() * EMOJIS.length),
      guessed: [],
    };
    this.generateAnswers = this.generateAnswers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    // this.getNewAnswer = this.getNewAnswer.bind(this);
  }

  checkAnswer(event) {
    console.log(event);
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[this.state.random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      console.log('Correct');
      //push the INDEX# to guessed
    } else {
      alert('Try Again')
    }
    // console.log(clickedEmoji === correctEmoji ? "verdad" : "mierda");
  }

  generateAnswers() {
    // INITIALIZE empty 'answers' ARRAY
    const answers = [];
    //for() LOOP generates 4 X RANDOM #'S
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * EMOJIS.length);
      //generate a RANDOM# from 0-30(EMOJIS.length)...)
      if (answers.includes(num) || num === this.state.random) {
        //IF the 'answers' ARRAY includes the RANDOM# assigned to this.state.random OR a RANDOM# already included in the 'answers' ARRAY, RE-ITERATE the for() LOOP(i--)
        // console.log("or cond Met", num);
        i--;
        continue;
      } else {
        //ELSE, IF RANDOM# is unique, add RANDOM# to 'answers' ARRAY
        answers.push(num);
      }
    }
    answers.push(this.state.random);

    console.log("OG", answers);
    //EMOJIS are randomized by utility/ShuffleArray.js
    ShuffleArray(answers);
    console.log("Shuf", answers);
    return answers.map((i) => (
      <button value={i} onClick={this.checkAnswer}>
        {EMOJIS[i].emoji}{" "}
      </button>
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
