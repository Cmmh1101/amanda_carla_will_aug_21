import React, { Component } from "react";
import { EMOJIS } from "../shared/emojis";
import ShuffleArray from "./ShuffleArray";
import { Button } from "reactstrap";
import { Fade } from "react-animation-components";

export default class GameArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //INITIALIZING the random PROPERTY of the STATE as a RANDOM# from 1-30 RIGHT ANSWER
      random: Math.floor(Math.random() * EMOJIS.length),
      guessed: [],
      score: 0,
      remainingWords: 30,
      lives: 5,
      streak: 0
    };
    this.generateAnswers = this.generateAnswers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    // this.getNewAnswer = this.getNewAnswer.bind(this);
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
      // let newScore = Number(this.state.score);
      // let newWordCount = Number(this.state.remainingWords);
      this.setState({
        score: (this.state.score += 20),
        guessed: this.state.guessed.concat(this.state.random),
        remainingWords: (this.state.remainingWords -= 1),
        streak: (this.state.streak += 1)
      });
      if (this.state.streak >= 3) {
        var streakPoints = 10 * this.state.streak
        this.setState({
          score: this.state.score + streakPoints
        });
        console.log("Streak score", this.state.score);
      }
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
      // let newLives = Number(this.state.lives);
      this.setState({
        lives: (this.state.lives -= 1),
        streak: 0
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
        <button className="emojis" key={i} onClick={this.checkAnswer}>
          {EMOJIS[i].emoji}{" "}
        </button>
      ));
    }
  };

  render() {
    // console.log("Correcto", this.state.random);

    return (
      <>
        <div className="col-md-8 game-area">
          <div className="play_restart_btns">
            <Button className="btn-block" onClick={this.refreshPage}>
              Restart
            </Button>
          </div>
          <div className="board">
            <div className="col-4 board_item">
              <h6>Points</h6>
              <hr />
              <span>{this.state.score}</span>
            </div>
            <div className="col-4 board_item">
              <h6>Words</h6>
              <hr />
              <span>{this.state.remainingWords}</span>
            </div>
            <div className="col-4 board_item">
              <h6>Lives</h6>
              <hr />
              <span>{this.state.lives}</span>
            </div>
          </div>
          {/* Game Execussion */}

          <div className="play">
            <Fade in>
              <p className="word_in_play active">
                {EMOJIS[this.state.random].spanish}
                <img
                  className="word-jar"
                  src="../images/glassjar.png"
                  alt="jar"
                />
              </p>
            </Fade>
          </div>

          <div className="answer_options">
            <h3>Los Opciones</h3>
            {this.generateAnswers()}
          </div>
          <img
            className="game_area_img"
            src="../images/basekitchen.png"
            alt=""
          />
        </div>

        {/* <button onClick={this.refreshPage}>Restart</button> */}
        {/* <h3>Puntaje</h3> */}
        {/* <p>{this.state.score}</p> */}
        {/* <h3>Las Palabras Restante</h3> */}
        {/* <p>{this.state.remainingWords}</p> */}
        {/* <h3>Las Vidas</h3> */}
        {/* <p>{this.state.lives}</p> */}
        {/* <h3>La Palabra</h3> */}
        {/* <p>{EMOJIS[this.state.random].spanish}</p> */}
        {/* <h3>El Emoji Correcto</h3>
        <p>{EMOJIS[this.state.random].emoji}</p> */}

        {/* <h3>Los Opciones</h3> */}
        {/* {this.generateAnswers()} */}
      </>
    );
  }
}
