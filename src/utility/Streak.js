import React from "react";
import { FEEDBACK } from "../shared/feedback";

export const Streak = (props) => {
  const goodFeedBack = Math.floor(Math.random() * FEEDBACK.length);

  if (props.streak >= 3) {
    return (
      <>
        <div className="text-left streak">
          {props.streak}
          <span className="streak_emoji">🔥</span>

          <p>{FEEDBACK[goodFeedBack].feedback}</p>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

// export default Streak;
