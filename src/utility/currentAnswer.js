import React from "react";
import { EMOJIS } from "../shared/emojis";

export default function CurrentAnswer() {
  // const num = () => Math.floor(Math.random() * 31);
  const findEmoji = () => {
    const num = () => Math.floor(Math.random() * 31);

    return EMOJIS.filter((em) => em.id === num())[0];
  };
  const { spanish, emoji } = findEmoji();
  // console.log(currentEmoji);
  return (
    <>
      <p>{emoji}</p>
      <p>{spanish}</p>
    </>
  );
}
