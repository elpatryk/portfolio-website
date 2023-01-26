import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png"
              alt=""
            />{" "}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              {" "}
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7AB0a]/50">
                  Case study {i + 1} of {projects.length}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                akjsdhfalsjkdfghsjk ajhdsbf asdf asdf aksjdfh asl;dfk akjsdfl
                akgk dfhsgdkls
                fhgs;ddfhjklghsdfkjghsdkfghjbljashdvajslHDKBASKDsdf
                dfghjkdlsghdfkjghsdfkjgls
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
