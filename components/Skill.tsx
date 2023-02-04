import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: 40,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-scale-down w-16 h-16 xl:h-32 xl:w-32 md:h-28 md:w-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
       group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-sm font-bold text-black opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}
