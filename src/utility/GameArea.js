import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
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
  const [lives, setLives] = useState(0);
  const [streak, setStreak] = useState(0);
  const [language, setLanguage] = useState("spanish");
  const [key, setKey] = useState(0);
  const [gameIsLoaded, setGameIsLoaded] = useState(false);
  const [visible, setVisible] = useState();
  const [answerEmoji, setAnswerEmoji] = useState("");
  /********Visibility for temp. messages**********/

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [visible]);

  const CheckLoaded = (event) => {
    console.log(event);
    if (gameIsLoaded === false) {
      setGameIsLoaded(true);
      setLives(5);
    } else {
      RefreshPage();
    }
  };

  const onTimerEnd = () => {
    if (lives < 1 || guessed.length === EMOJIS.length) {
      setGameIsLoaded(false);
    }
    setKey((prevKey) => prevKey + 1);
    getNewAnswer();
    setLives((prevLives) => prevLives - 1);
    setStreak(0);
    alert("Too late...Lose 1 life");
  };
  /********** TIMER IN GAME COMPONENT **************/
  const RenderTime = () => {

    const Message = () => {
      /* useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(false);
        }, 500);
        return () => clearTimeout(timer);
      }, []); */
      return (
        <>
          <Fade when={visible}>
            <p>{answerEmoji}</p>
          </Fade>
        </>
      );
    };

    if (gameIsLoaded === false) {
      return (
        <div className="timer">
          <p>
            <strong>Presione Jugar</strong>
          </p>
        </div>
      );
    }
    if ((lives < 1 || guessed.length === EMOJIS.length) && gameIsLoaded) {
      return (
        <div>
          <p>
            Game Over. <br />
            Press Play to play again.
          </p>
        </div>
      );
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
          <Message />
        </div>
      </div>
    );
  };

  /****** TOGGLE LANGUAGE BETWEEN ENGLISH AND SPANISH ********* */
  const ChangeLanguage = () => {
    setLanguage(language === "spanish" ? "english" : "spanish");
    setRandom(Math.floor(Math.random() * EMOJIS.length));
    setScore(0);
    setLives(0);
    setRemainingWords(EMOJIS.length);
    setStreak(0);
    setKey((prevKey) => prevKey + 1);
    setGameIsLoaded(false);
  };

  /*******REASSIGN NEW RANDOM#(MUST NOT BE IN guessed[])*****/
  const getNewAnswer = () => {
    let num = Math.floor(Math.random() * EMOJIS.length);
    if (guessed.includes(num) === true && guessed.length < EMOJIS.length) {
      console.log("repeats", num, "\nguessed", guessed);
      getNewAnswer();
    } else {
      console.log(" no repeat", num, "\nguessed", guessed);
      setRandom(num);
    }
  };

  /****** CHECK IF PICTURE CLICKED MATCHES WORD ON SCREEN *******/
  useEffect(() => {
    if (gameIsLoaded) {
      // console.log("guessed array", guessed);
      // console.log("guessed.length inside CheckAns:", guessed.length);
      setRemainingWords((prevState) => prevState - 1);
      setStreak((prevState) => prevState + 1);
      if (guessed.length < EMOJIS.length) {
        getNewAnswer();
      }

      /***** GIVE BONUS POINTS FOR WINNING STREAKS *******/
      console.log("streak", streak);
      if (streak >= 3) {
        const streakPoints = 10 * streak;
        setScore((prevState) => prevState + streakPoints);
        console.log("Streak score", streakPoints);
      }
      /****** END GAME IF USER RUNS OUT OF WORDS ******/
      if (guessed.length === EMOJIS.length) {
        alert(
          `Congratulations! You Won. Your top score is ${score}.\nIf you are doing this for class, take a screenshot for your teacher and press "Restart" to start a new game.`
        );
      }
    } 
  }, [guessed]);

  const checkAnswer = (event) => {
    setVisible(true);
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      setKey((prevKey) => prevKey + 1);
      console.log("Correct");
      setScore((prevState) => prevState + 20);
      console.log("guessed array before", guessed);
      setGuessed((prevState) => [...prevState, random]);
      setAnswerEmoji("✅");
    } else {
      /****IF USER GUESSES WRONG - LOSE LIFE & RESTART STREAK ****/
      setKey((prevKey) => prevKey + 1);
      setLives((prevState) => prevState - 1);
      setStreak(0);
      setAnswerEmoji("❌");
      if (lives >= 1) {
        setVisible(true);
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
          <Button className="btn-block" onClick={CheckLoaded}>
            {language === "spanish" ? "¡Juega Ahora!" : "Play Now"}
          </Button>
          <Button className="btn-block mt-0" onClick={ChangeLanguage}>
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
                isPlaying={lives > 0}
                size={250}
                duration={5}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => onTimerEnd()}
                className="circle_timer"
              >
                {RenderTime}
              </CountdownCircleTimer>
            </Fade>
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
