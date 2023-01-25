import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer  transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  object-cover object-centern"
        src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Codaisseur-square/original.png?1560209974"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Student</h4>
        <p className="font-bold text-2xl mt-1">Codaisseur Academy</p>
        <div className="flex space-x-2 my-2">
          <img alt="" src="" className="h-1 w-10 rounded-full" />
          Technologies
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
