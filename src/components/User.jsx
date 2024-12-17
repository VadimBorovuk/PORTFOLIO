import {USER_CONTENT} from "../constants/index.js";
import {Element} from 'react-scroll';
import {motion} from "framer-motion";

import resumeFile from "../assets/resume/Frontend-2024_Eng_.pdf";
import userPicture from '../assets/vadimBoroProfile.webp';

const variantsSettings = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: .5, delay: delay}
  },
})

const User = () => {
  // lg:pb-14
  return (
      <Element className="pt-20 pb-4 lg:pt-28 lg:min-h-screen"
               key='head' name='head'>
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap pt-8 md:lg-0">
            <div className="w-full lg:w-1/2 pb-5 lg:pb-0">
              <div className="flex flex-col items-center lg:items-start p-0 lg:pl-6">
                <motion.h1
                    variants={variantsSettings(.4)}
                    initial="hidden"
                    animate="visible"
                    className="pb-6 g:pb-16 font-thin tracking-tight text-4xl lg:mt-16 lg:text-6xl xl:text-8xl">
                  Vadym Borovyk
                </motion.h1>

                <motion.span
                    variants={variantsSettings(.7)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-l from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                  Frontend developer
                </motion.span>
                <motion.p
                    variants={variantsSettings(1)}
                    initial="hidden"
                    animate="visible"
                    className="text-sm lg:text-lg max-w-xl py-4 lg:py-5 font-light tracking-tight">
                  {USER_CONTENT}
                </motion.p>
                <motion.div
                    variants={variantsSettings(1.2)}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start">
                  <a href={resumeFile} target="_blank" className="text-sm lg:text-lg px-3 py-2 lg:px-6 lg:py-3 bg-neutral-800 rounded-3xl tracking-tight mr-4">Download CV</a>
                  <a href="mailto:borovyk17vadym27@gmail.com" target="_blank"
                     className="text-sm lg:text-lg px-3 py-2 lg:px-6 lg:py-3 bg-neutral-800 rounded-3xl tracking-tight">Send me</a>
                </motion.div>

              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <motion.img
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="rounded-3xl h-1/2 w-1/2 relative z-0"
                    src={userPicture} alt="Vadym Borovyk"/>
              </div>
            </div>
          </div>
        </div>
      </Element>
  );
};

export default User;
