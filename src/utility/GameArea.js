import React, { useState } from "react";
import { Button } from "reactstrap";
import { Fade } from "react-animation-components";
import { EMOJIS } from "../shared/emojis";
import { GenerateAnswers } from "./GenerateAnswers";
import { Streak } from "./Streak";
import { RefreshPage } from "./RefreshPage";

const GameArea = () => {
  const [random, setRandom] = useState(
    Math.floor(Math.random() * EMOJIS.length)
  );
  const [guessed, setGuessed] = useState([]);
  const [score, setScore] = useState(0);
  const [remainingWords, setRemainingWords] = useState(EMOJIS.length);
  const [lives, setLives] = useState(5);
  const [streak, setStreak] = useState(0);
  const [language, setLanguage] = useState("spanish");

  const ChangeLanguage = () => {
    setLanguage(language === "spanish" ? "english" : "spanish");
    setRandom(Math.floor(Math.random() * EMOJIS.length));
    setScore(0);
    setRemainingWords(EMOJIS.length);
    setLives(5);
    setStreak(0);
  };

  const getNewAnswer = () => {
    //REASSIGN NEW RANDOM#(MUST NOT BE IN guessed[])
    let num = Math.floor(Math.random() * EMOJIS.length);
    if (guessed.includes(num) === true) {
      // console.log("repeats", num, "\nguessed", guessed);
      getNewAnswer();
    } else {
      // console.log(" no repeat", num, "\nguessed", guessed);
      setRandom(num);
    }
  };

  const checkAnswer = (event) => {
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      console.log("Correct");
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
      setLives((prevState) => prevState - 1);
      setStreak(0);
      if (lives > 0) {
        alert(`You lost 1 Life.\nYou have ${lives} lives remaining.`);
      } else {
        alert("Game Over. Press 'Restart' to play again.");
      }
    }
  };
  console.log("New Score", score, "\nGuessed inside check ans:", guessed);

  //EMOJIS are randomized by utility/ShuffleArray.js

  // console.log("Correcto", this.state.random);

  return (
    <>
      <div className="col-md-8 game-area">
        <div className="play_restart_btns">
          <Button className="btn-block" onClick={RefreshPage}>
            Restart
          </Button>
          <Button className="btn-block" onClick={ChangeLanguage}>
            {`Change Language to ${
              language === "spanish" ? "English" : "Spanish"
            }`}
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
        {/* Game Execution */}

        <div className="play">
          <Streak streak={streak} />
          <Fade in>
            <p className="word_in_play active">
              {language === "spanish"
                ? EMOJIS[random].spanish
                : EMOJIS[random].english}
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
          <GenerateAnswers
            lives={lives}
            words={remainingWords}
            random={random}
            checkAnswer={checkAnswer}
          />
        </div>
        <img className="game_area_img" src="../images/basekitchen.png" alt="" />
      </div>
    </>
  );
};

export default GameArea;
