import React, { Component } from "react";
import { EMOJIS } from "../shared/emojis";

export default class CurrentAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: Math.floor(Math.random() * 30 + 1),
    };
  }

  // componentDidMount() {
  //   this.setState(
  //     {
  //       random: Math.floor(Math.random() * 30 + 1),
  //       // random: 3,
  //     },
  //     () => console.log(" setStatedidMount", this.state.random)
  //   );
  //   // console.log(this.state.random);
  // }

  render() {
    // const answer = () => EMOJIS.filter((em) => em.id === this.state.random)[0];
    console.log("WHAT");
    console.log("Render", this.state.random);
    return (
      <>
        <h3>El Emoji Correcto</h3>
        <p>{EMOJIS[this.state.random].spanish}</p>
        <h3>La Palabra</h3>
        <p>{EMOJIS[this.state.random].emoji}</p>
      </>
    );
  }
}
