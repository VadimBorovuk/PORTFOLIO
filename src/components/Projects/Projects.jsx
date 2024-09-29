import {Element, Link} from 'react-scroll';
import {PROJECTS} from "../../constants/index.js";
import Title from "../UI/Title.jsx";
import {getIconByStack} from "../UI/StackTechnologies.jsx";
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ProjectBody from "./ProjectBody.jsx";


const Projects = () => {
  return (
      <Element className="lg:min-h-screen lg:py-20" key='projects' name='projects'>
        <div className="container mx-auto px-8">
          <motion.div
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -100}}
              transition={{duration: .5}}
          >
            <Title value="Projects"/>
          </motion.div>

          <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-7">
            {
              PROJECTS.map((item, idx) => (<ProjectBody key={idx} {...item}/>))
            }
          </motion.div>
        </div>
      </Element>
  );
};

export default Projects;
