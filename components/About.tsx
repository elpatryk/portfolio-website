import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        {" "}
      </h3>

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
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0  flex-shrink-0 w-40 h-30 rounded-full object-cover sm:w-56 sm:h-56  md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y px-0  md:px-10">
        <p className="text-sm sm:text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
