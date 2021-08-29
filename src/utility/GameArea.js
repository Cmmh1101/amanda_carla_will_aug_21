import React, { useState } from "react";
import { EMOJIS } from "../shared/emojis";
import ShuffleArray from "./ShuffleArray";
import { Button } from "reactstrap";
import { Fade } from "react-animation-components";
import { Streak } from "./Streak";

const refreshPage = () => {
  window.location.reload(true);
};

const GameArea = () => {
  const [random, setRandom] = useState(
    Math.floor(Math.random() * EMOJIS.length)
  );
  const [guessed, setGuessed] = useState([]);
  const [score, setScore] = useState(0);
  const [remainingWords, setRemainingWords] = useState(30);
  const [lives, setLives] = useState(5);
  const [streak, setStreak] = useState(0);

  const getNewAnswer = () => {
    //REASSIGN NEW RANDOM#(MUST NOT BE IN guessed[])
    let num = Math.floor(Math.random() * EMOJIS.length);
    if (guessed.includes(num) === true) {
      getNewAnswer();
    } else {
      setRandom(num);
    }
  };

  const checkAnswer = (event) => {
    // console.log(event);
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      console.log("Correct");
      // let newScore = Number(this.state.score);
      // let newWordCount = Number(this.state.remainingWords);
      setScore((prevState) => prevState + 20);
      setGuessed((prevState) => [...prevState, random]);
      setRemainingWords((prevState) => prevState - 1);
      setStreak((prevState) => prevState + 1);
      getNewAnswer();

      console.log("streak", streak);
      if (streak >= 3) {
        const streakPoints = 10 * streak;
        setScore((prevState) => prevState + streakPoints);
        console.log("Streak score", streakPoints);
      }
      if (remainingWords === 0) {
        alert(
          `Congratulations! You Won. Your top score is ${score}.\nIf you are doing this for class, take a screenshot for your teacher and press "Restart" to start a new game.`
        );
      }
    } else {
      // let newLives = Number(this.state.lives);
      setLives((prevState) => prevState - 1);
      setStreak(0);
      if (lives > 0) {
        alert(`You lost 1 Life.\nYou have ${lives} lives remaining.`);
      } else {
        alert("Game Over. Press 'Restart' to play again.");
        // window.location.reload(true);
      }
    }
  };
  console.log("New Score", score, "\nGuessed inside check ans:", guessed);
  // console.log(clickedEmoji === correctEmoji ? "verdad" : "mierda");

  //EMOJIS are randomized by utility/ShuffleArray.js
  const GenerateAnswers = () => {
    const answers = [];

    //for() LOOP generates 4 X RANDOM #'S WRONG ANSWERS

    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * EMOJIS.length);
      if (answers.includes(num) || num === random) {
        // console.log("or cond Met", num);
        i--;
        continue;
      } else {
        answers.push(num);
      }
    }
    answers.push(random);

    // console.log("OG", answers);
    ShuffleArray(answers);
    // console.log("Shuf", answers);

    if (remainingWords === 0 || lives === 0) {
      return <></>;
    } else {
      return answers.map((i) => (
        <button className="emojis" key={i} onClick={checkAnswer}>
          {EMOJIS[i].emoji}{" "}
        </button>
      ));
    }
  };
  // console.log("Correcto", this.state.random);

  return (
    <>
      <div className="col-md-8 game-area">
        <div className="play_restart_btns">
          <Button className="btn-block" onClick={refreshPage}>
            Restart
          </Button>
        </div>
        <div className="board">
          <div className="col-4 board_item">
            <h6>Points</h6>
            <hr />
            <span>{score}</span>
          </div>
          <div className="col-4 board_item">
            <h6>Words</h6>
            <hr />
            <span>{remainingWords}</span>
          </div>
          <div className="col-4 board_item">
            <h6>Lives</h6>
            <hr />
            <span>{lives}</span>
          </div>
        </div>
        {/* Game Execussion */}

        <div className="play">
          <Streak streak={streak} />
          <Fade in>
            <p className="word_in_play active">
              {EMOJIS[random].spanish}
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
          <GenerateAnswers />
        </div>
        <img className="game_area_img" src="../images/basekitchen.png" alt="" />
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
};

export default GameArea;
