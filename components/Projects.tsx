/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="rounded object-cover h-20 w-20 sm:w-24 sm:h-24 xl:h-32 xl:w-32 md:h-28 md:w-28"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
            />{" "}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              {" "}
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7AB0a]/50">
                  <Link href={project.linkToBuild}> {project.title} </Link>
                </span>
              </h4>
              <div className="text-sm md:text-lg text-center md:text-left">
                {project.summary}
                Technology used:{" "}
                <div className="flex items-center space-x-2 justify-center">
                  {" "}
                  {project.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      src={urlFor(technology?.image).url()}
                      alt="not"
                      className="h-12 w-12"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
