import { HERO_CONTENT } from "../constants";
import profilePic1 from "../assets/pic4.gif";
import { motion } from "framer-motion";
import code from "../assets/code.gif";
import {Typewriter} from 'react-simple-typewriter';
import { useState } from "react";
import "../styles.css";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {



  return (
    <div className="border-b min-w border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex pl-2  flex-col items-center lg:items-start">
            <div className="mt-10">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 animate-blin  min-w-fit h-full animate-pulse  text-6xl font-bold  tracking-tighter lg:mt-16 lg:text-8xl"
            >
              {/* <div className="min-w-fit h-full rounded-full transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500  duration-300 ..."> */}
             I'm Arvind Nataraj
              {/* <Home/> */}

              {/* </div> */}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" flex gap-2  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
            <h2 className="text-[32px] sm:text-[38px] md:text-[48px] font-semibold text-gradient mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
          a {' '}
          <Typewriter
            words={['//Software Engineer 👨‍💻 ', '# UI/UX Designer 🎨 ', '* Software Developer 💡 ']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
             onLoopDone={() => setIndex((prev) => (prev + 1) % emojis.length)}
          />
        </span>
      </h2>
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl text-justify  py-6 font-light tracking-tighter"
            >
              {" "}
              {HERO_CONTENT}
            </motion.p>
          </div>
         </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded"
              src={profilePic1}
              alt=""
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
