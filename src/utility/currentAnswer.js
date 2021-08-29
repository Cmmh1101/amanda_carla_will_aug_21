import React, { Component } from "react";
import { EMOJIS } from "../shared/emojis";
import ShuffleArray from "./ShuffleArray";

export default class CurrentAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //INITIALIZING the random PROPERTY of the STATE as a RANDOM# from 1-30 RIGHT ANSWER
      random: Math.floor(Math.random() * EMOJIS.length),
      guessed: [],
      score: 0,
      remainingWords: 30,
      lives: 5,
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

  refreshPage = () => {
    window.location.reload(true);
  };

  getNewAnswer = () => {
    //REASSIGN NEW RANDOM#(MUST NOT BE IN guessed[])
    let num = Math.floor(Math.random() * EMOJIS.length);
    if (this.state.guessed.includes(num)) {
      this.getNewAnswer();
    } else {
      this.setState({
        random: num,
      });
    }
  };

  checkAnswer = (event) => {
    // console.log(event);
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[this.state.random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      console.log("Correct");
      this.setState({
        score: (this.state.score += 20),
        guessed: this.state.guessed.concat(this.state.random),
        remainingWords: (this.state.remainingWords -= 1),
      });
      if (this.state.remainingWords === 0) {
        alert(
          `Congratulations! You Won. Your top score is ${this.state.score}.\nIf you are doing this for class, take a screenshot for your teacher and press "Restart" to start a new game.`
        );
        // window.location.reload(true);
      }
      this.getNewAnswer();
      console.log(
        "New Score",
        this.state.score,
        "\nGuessed:",
        this.state.guessed
      );
    } else {
      this.setState({
        lives: (this.state.lives -= 1),
      });
      if (this.state.lives > 0) {
        alert(
          `You lost 1 Life.\nYou have ${this.state.lives} lives remaining.`
        );
      } else {
        alert("Game Over. Press 'Restart' to play again.");
        // window.location.reload(true);
      }
    }
  };
  // console.log(clickedEmoji === correctEmoji ? "verdad" : "mierda");

  //EMOJIS are randomized by utility/ShuffleArray.js
  generateAnswers = () => {
    const answers = [];

    //for() LOOP generates 4 X RANDOM #'S WRONG ANSWERS

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

    // console.log("OG", answers);
    ShuffleArray(answers);
    console.log("Shuf", answers);

    if (this.state.remainingWords === 0 || this.state.lives === 0) {
      return <></>;
    } else {
      return answers.map((i) => (
        <button key={i} onClick={this.checkAnswer}>
          {EMOJIS[i].emoji}{" "}
        </button>
      ));
    }
  };

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
