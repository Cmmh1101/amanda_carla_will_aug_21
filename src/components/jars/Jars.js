import React from "react";

const RenderJars = (props) => {
  for (let i = 0; i < props.count; i++) {
    console.log(`Jar#: ${i}`);
    return <img className="new-jar" src={"/images/glassjar.png"} alt = "glass jar" />;
  }
};

export default function Jars(props) {
  console.log(props.count, typeof props.count);
  if (props.count > 0) {
    return (
      <div className="col">
        <div className="row">
          <RenderJars count={props.count} />
        </div>
      </div>
    );

    //HOW DO I MAKE IT RENDER THE IMAGE *= TO props.count(number of Correct guesses in GameArea)???????????????
  } else {
    return <div />;
  }
}
