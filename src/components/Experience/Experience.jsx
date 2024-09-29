import {Element, Link} from 'react-scroll';
import {EXPERIENCES} from "../../constants/index.js";
import Title from "../UI/Title.jsx";
import {motion} from "framer-motion";
import ExperienceBody from "./ExperienceBody.jsx";

const Experience = () => {
  return (
      <Element className="lg:min-h-screen lg:py-14" key='experience' name='experience'>
        <div className="container mx-auto px-8">
          <motion.div
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: .5}}
          >
            <Title value="Experience"/>
          </motion.div>

          <div className="">
            {
              EXPERIENCES.map((item, idx) =>(
                 <ExperienceBody key={idx} {...item}/>
              ))
            }
          </div>
        </div>
      </Element>
  );
};

export default Experience;
