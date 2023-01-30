import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name is ${pageInfo?.name}`,
      "I'm-huge-football-fun",
      "<ButLoveToCodeMore />",
      "checkMyPortfolioWebsite.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h3 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h3>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text} </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
