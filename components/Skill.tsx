import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-32 xl:w-32 md:h-28 md:w-28 filter group-hover:grayscale trannsition duration-300 ease-in-out"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 trnsition duration-300 ease-in-out
       group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
