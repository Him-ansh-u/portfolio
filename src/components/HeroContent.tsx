"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import Button from "./Button";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-36 w-full z-[20]"
    >
      <div className="h-full w-[55%] flex flex-col gap-2 justify-center m-auto text-start">
        
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-4 border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="Welcome-text text-[13px]">Full Stack Developer</h1>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-2 max-w-[600px]"
        >
          Hi, I’m Himanshu Sharma
        </motion.p>

        {/* Headline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 text-6xl font-bold text-white w-full"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              {" "}
              scalable high-performance{" "}
            </span>
            web applications
          </span>

          <span className="text-2xl font-medium text-gray-300">
            with modern frontend architecture
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-4 w-full"
        >
          Full Stack Developer specializing in MERN and Next.js, with experience
          building production features, optimizing performance, and integrating
          real-world APIs like payments, authentication, and third-party services.
          Focused on scalability, clean architecture, and polished user
          experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-2.5 mt-2"
        >
          <Button variant="primary">View Projects</Button>
          <Button variant="outline">Download Resume</Button>
        </motion.div>
         <motion.ul
          variants={slideInFromLeft(1.2)}
          className="mt-6 flex gap-4 text-gray-300 font-medium text-sm"
        >
          <li className="flex items-center gap-2">
            🚀 2+ years professional experience
          </li>
          <li className="flex items-center gap-2">
            ⚡ 10+ projects
          </li>
          <li className="flex items-center gap-2">
            🧩 40+ real-world features
          </li>
        </motion.ul>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-[45%] h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
