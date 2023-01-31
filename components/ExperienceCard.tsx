/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:h-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
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
        className="w-32 h-18 rounded-full  object-cover object-centern"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        {/* <div className="flex space-x-2 my-2 ">
          {experience?.technologies.map((technology, i) => (
            <img
              key={i}
              alt=""
              src={urlFor(technology.image).url()}
              className="h-10 w-10 rounded-full object-cover "
            />
          ))}
        </div> */}
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {new Date(experience?.dateEnded).toDateString()}{" "}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-10 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
