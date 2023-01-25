import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Patryk Zmurko",
      "I'm-huge-football-fun",
      "<ButLovesToCodeMore />",
      "checkMyPortfolioWebsite.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <h1>
        <span>{text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
