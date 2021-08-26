import React from "react";
import { EMOJIS } from "../shared/emojis";

export default function CurrentAnswer() {
  const num = () => Math.floor(Math.random() * 31);
  const findEmoji = () => EMOJIS.filter((em) => em.id === num())[0];
  // console.log(num, currentEmoji());
  const currentEmoji = findEmoji();
  return <p>{currentEmoji.spanish}</p>;
}
