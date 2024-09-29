import {ABOUT_TEXT} from "../constants/index.js";
import {Element} from 'react-scroll';
import {motion} from "framer-motion"
import Title from "./UI/Title.jsx";
import animationData from "../assets/AboutMeSection.json";
import Lottie from "lottie-react";


const About = () => {

  return (
      <Element className="lg:min-h-screen mb-10" key='about' name='about'>
        <div className="container mx-auto px-8">
          <motion.div
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -100}}
              transition={{duration: .5}}
          >
            <Title value="About me"/>
          </motion.div>
          <div className="flex flex-wrap">

            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: .5}}
                className="w-full lg:w-2/5">
              <div className="flex items-start justify-center">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="h-[250px] md:h-[400px] w-full"
                />
                {/*<img className="rounded-3xl" src={aboutPicture} alt="about me"/>*/}
              </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: .5}}
                className="w-full lg:w-3/5">
              <div className="flex justify-center lg:justify-start">
                <p className="text-sm lg:text-lg  max-w-xl pt-3 font-light tracking-tigh">{ABOUT_TEXT}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Element>
  );
};

export default About;
