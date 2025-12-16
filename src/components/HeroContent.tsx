"use client";

import React from "react";
import { motion } from "framer-motion";

// import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-36 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-4 border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          <h1 className="Welcome-text text-[13px]">Full Stack Developer</h1>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-2 max-w-[600px]"
        >
          Hi, I’m Himanshu Sharma
        </motion.p>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6  text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              modern, high-quality{" "}
            </span>
            web applications
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I’m a Full Stack Software Develoepr specializing in MERN stack and Next.js, focused on building fast, scalable, and maintainable web applications.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-2.5"
        >
          <button className="py-2 px-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            View Projects
          </button>
          <button className="py-2 px-3 button-secondary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
