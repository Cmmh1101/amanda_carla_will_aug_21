import React, { useState } from "react";
import { Button } from "reactstrap";
import { Fade } from "react-animation-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { EMOJIS } from "../shared/emojis";
import Jars from "../components/jars/Jars";
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
  const [key, setKey] = useState(0);

  /********** TIMER IN GAME COMPONENT **************/
  const RenderTime = ({ remainingTime }) => {
    if (lives < 1) {
      return (
        <div>
          <p>
            Game Over. <br />
            Press Restart to play again.
          </p>
        </div>
      );
    }
    if (remainingTime === 0) {
      /*These need to be put into a parent function */
      setKey((prevKey) => prevKey + 1);
      getNewAnswer();
      setLives(lives - 1);
      setStreak(0);
      return <div className="timer">Too late...Lose 1 life</div>;
    }
    return (
      <div className="timer">
        <div className="value">
          <p className="word_in_play active">
            {language === "spanish"
              ? EMOJIS[random].spanish
              : EMOJIS[random].english}
            <img className="word-jar" src="../images/glassjar.png" alt="jar" />
          </p>
        </div>
      </div>
    );
  };

  /****** TOGGLE LANGUAGE BETWEEN ENGLISH AND SPANISH ********* */
  const ChangeLanguage = () => {
    setLanguage(language === "spanish" ? "english" : "spanish");
    setRandom(Math.floor(Math.random() * EMOJIS.length));
    setScore(0);
    setRemainingWords(EMOJIS.length);
    setLives(5);
    setStreak(0);
    setKey((prevKey) => prevKey + 1);
  };

  /*******REASSIGN NEW RANDOM#(MUST NOT BE IN guessed[])*****/
  const getNewAnswer = () => {
    // This is NOT currently working the way we want it to!
    let num = Math.floor(Math.random() * EMOJIS.length);
    if (guessed.includes(num) === true) {
      console.log("repeats", num, "\nguessed", guessed);
      getNewAnswer();
    } else {
      console.log(" no repeat", num, "\nguessed", guessed);
      setRandom(num);
    }
  };

  /****** CHECK IF PICTURE CLICKED MATCHES WORD ON SCREEN *******/
  const checkAnswer = (event) => {
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      setKey((prevKey) => prevKey + 1);
      console.log("Correct");
      setScore((prevState) => prevState + 20);
      setGuessed((prevState) => [...prevState, random]);
      console.log("guessed.length inside CheckAns:", guessed.length);
      setRemainingWords((prevState) => prevState - 1);
      setStreak((prevState) => prevState + 1);
      getNewAnswer();

      /***** GIVE BONUS POINTS FOR WINNING STREAKS *******/
      console.log("streak", streak);
      if (streak >= 3) {
        const streakPoints = 10 * streak;
        setScore((prevState) => prevState + streakPoints);
        console.log("Streak score", streakPoints);
      }
      /****** END GAME IF USER RUNS OUT OF WORDS ******/
      if (remainingWords === 0) {
        alert(
          `Congratulations! You Won. Your top score is ${score}.\nIf you are doing this for class, take a screenshot for your teacher and press "Restart" to start a new game.`
        );
      }
    } else {
      /****IF USER GUESSES WRONG - LOSE LIFE & RESTART STREAK ****/
      setKey((prevKey) => prevKey + 1);
      setLives((prevState) => prevState - 1);
      setStreak(0);
      if (lives >= 1) {
        alert(`You lost 1 Life.\nYou have ${lives - 1} lives remaining.`);
      } else {
        alert("Game Over. Press 'Restart' to play again.");
      }
    }
  };
  console.log("New Score", score, "\nGuessed inside check ans:", guessed);
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
          <div className="col-4">
            <Streak streak={streak} />
          </div>
          <div className="col circle_timer">
            <Fade in>
              <CountdownCircleTimer
                key={key}
                isPlaying
                size={250}
                duration={5}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => [true, 5000]}
                className="circle_timer"
              >
                {RenderTime}
              </CountdownCircleTimer>
            </Fade>
          </div>
          <div className="col">
            <Jars count={guessed.length} />
          </div>
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
