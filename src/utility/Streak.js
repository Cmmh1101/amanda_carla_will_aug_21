import React from "react";
import { FEEDBACK } from "../shared/feedback";

var goodFeedback = 0;

export const Streak = (props) => {
  const goodFeedback = Math.floor(Math.random() * FEEDBACK.length);
  console.log("feedback one", goodFeedback);

  if (props.streak >= 3) {
    return (
      <>
        <div className="text-left streak">
          {props.streak}
          <span className="streak_emoji">🔥</span>

          <p>Streak</p>
          {/* <p>{FEEDBACK[goodFeedback].feedback}</p> */}
        </div>
      </>
    );
  } else {
    return <></>;
  }
  console.log("feedback two", goodFeedback);
};

// export default Streak;
