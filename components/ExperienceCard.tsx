import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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
        className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-centern"
        src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Codaisseur-square/original.png?1560209974"
        alt=""
      />
      <div>
        <h4>Student</h4>
        <p>Codaisseur Academy</p>
        <div>Technologies</div>
        <p> Started work... - ended ...</p>
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
