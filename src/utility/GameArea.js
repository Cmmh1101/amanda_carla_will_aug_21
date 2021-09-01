import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Fade } from "react-animation-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { EMOJIS } from "../shared/emojis";
import { GenerateAnswers } from "./GenerateAnswers";
import { Streak } from "./Streak";
import { RefreshPage } from "./RefreshPage";

var timerId = null;
const GameArea = () => {
  const [random, setRandom] = useState(
    Math.floor(Math.random() * EMOJIS.length)
  );
  const [guessed, setGuessed] = useState([]);
  const [score, setScore] = useState(0);
  const [remainingWords, setRemainingWords] = useState(EMOJIS.length);
  const [lives, setLives] = useState(0);
  const [streak, setStreak] = useState(1);
  const [language, setLanguage] = useState("spanish");
  const [key, setKey] = useState(0);
  const [gameIsLoaded, setGameIsLoaded] = useState(false);
  const [answerEmoji, setAnswerEmoji] = useState("");

  const CheckLoaded = (event) => {
    console.log(event);
    if (gameIsLoaded === false) {
      setGameIsLoaded(true);
      setLives(5);
      setScore(0);
      setRemainingWords(EMOJIS.length);
      setGuessed([]);
      setStreak(1);
      setKey(0);
    } else {
      RefreshPage();
    }
  };

  const onTimerEnd = () => {
    if (lives < 1 || guessed.length === EMOJIS.length || remainingWords < 1) {
      setGameIsLoaded(false);
      /* const bonusLivesPts = 50 * lives
      setScore((prevState) => prevState + bonusLivesPts);
      console.log("bonusLivesPts", bonusLivesPts);
      setLives(0); */
    } else {
      alert("Too late...Lose 1 life");
      setKey((prevKey) => prevKey + 1);
      getNewAnswer();
      setLives((prevLives) => prevLives - 1);
      setStreak(1);
    }
  };
  /********** TIMER IN GAME COMPONENT **************/
  const RenderTime = () => {
    if (gameIsLoaded === false) {
      return (
        <div className="timer">
          <p>
            <strong>
              {language === "spanish" ? "Presione Jugar" : "Press Play"}
            </strong>
          </p>
        </div>
      );
    }

    // This runs before onTimerEnd and then runs again when timer ends to first if above
    if (
      (lives < 1 || guessed.length === EMOJIS.length || remainingWords < 1) &&
      gameIsLoaded
    ) {
      const bonusLivesPts = 50 * lives;
      setScore((prevState) => prevState + bonusLivesPts);
      console.log("bonusLivesPts", bonusLivesPts);
      // alert("Press ok to add life bonus to score") - infinite loop?
      setLives(0);
      return (
        <div>
          <p>
            {language === "spanish"
              ? "Juego Terminado. Para volver a jugar, Presione Jugar!"
              : `Game Over. Press Play to play again!`}
          </p>
        </div>
      );
    }
    return (
      <div className="timer">
        <div className="value">
          <p>{answerEmoji}</p>
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
    setLives(0);
    setRemainingWords(EMOJIS.length);
    setStreak(1);
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
      console.log(
        "guessed array",
        guessed,
        EMOJIS.length,
        "get new answer?",
        guessed.length < EMOJIS.length
      );
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
      //not currently running???
      if (guessed.length === EMOJIS.length) {
        alert("Congrats, you've won! 🏆 \nClick ok to add life bonus");
        onTimerEnd();
      }
    }
  }, [guessed]);

  useEffect(() => {
    if (answerEmoji !== "" && !timerId) {
      timerId = setTimeout(() => {
        timerId = null;
        setAnswerEmoji("");
      }, 500);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [answerEmoji]);

  useEffect(() => {
    console.log("State vars", guessed, answerEmoji, timerId);
  });

  const checkAnswer = (event) => {
    const clickedEmoji = event.target.innerText;
    const correctEmoji = EMOJIS[random].emoji;
    console.log(clickedEmoji, correctEmoji);
    if (clickedEmoji === correctEmoji) {
      setKey((prevKey) => prevKey + 1);
      console.log("Correct");
      setScore((prevState) => prevState + 20);
      console.log("guessed array before", guessed);
      setGuessed((prevState) => [...prevState, random]);
      setAnswerEmoji("✅ Great Job!");
    } else {
      /****IF USER GUESSES WRONG - LOSE LIFE & RESTART STREAK ****/
      setKey((prevKey) => prevKey + 1);
      setLives((prevState) => prevState - 1);
      setStreak(1);
      if (lives >= 1) {
        setAnswerEmoji("❌ Try again");
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
            {language === "spanish"
              ? `Cambiar Idioma a Inglés.`
              : `Change Language to Spanish`}
          </Button>
        </div>
        <div className="board">
          <div className="col-4 board_item">
            <h6>{language === "spanish" ? "Puntos" : "Points"}</h6>
            <hr />
            <span>{score}</span>
          </div>
          <div className="col-4 board_item">
            <h6>{language === "spanish" ? "Palabras" : "Words"}</h6>
            <hr />
            <span>{remainingWords}</span>
          </div>
          <div className="col-4 board_item">
            <h6>{language === "spanish" ? "Vidas" : "Lives"}</h6>
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
          {/* <div className="col">
            <Jars count={guessed.length} />
          </div> */}
        </div>
        <div className="answer_options">
          <h3>{language === "spanish" ? "Los Opciones" : "The Options"}</h3>
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
