import React from "react";

export const Streak = (props) => {
  if (props.streak >= 3) {
    return (
      <>
        <div className="text-left streak">
          {props.streak}
          <span className="streak_emoji">🔥</span>
          <p>Great Job!</p>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

// export default Streak;
