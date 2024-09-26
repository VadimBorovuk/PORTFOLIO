import {Element, Link} from 'react-scroll';
import {EXPERIENCES} from "../constants/index.js";
import Title from "./UI/Title.jsx";
import {motion} from "framer-motion";

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
                  <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                      <p className="mb-2 text-lg text-neutral-400">{item.year}</p>
                    </motion.div>

                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-2 font-semibold">{item.role} - <span className="text-sm text-purple-300">{item.company}</span></h6>
                      <p className="mb-4 text-neutral-400">{item.description}</p>
                     <div className="flex items-center gap-2 flex-wrap">
                       {
                         item.technologies.map((tech, idx) =>(
                             <Link
                                 key={idx}
                                 smooth={true}
                                 duration={800}
                                 to="technologies"
                                 activeClass="text-purple-500"
                                 className="text-white cursor-pointer text-sm lg:text-lg xl:text-xl"
                                 spy={true}
                                 offset={-70}
                             >
                               <span
                                     className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 transition-all duration-500 hover:bg-neutral-800">{tech}</span>
                             </Link>
                         ))
                       }
                     </div>
                    </motion.div>
                  </div>
              ))
            }
          </div>
        </div>
      </Element>
  );
};

export default Experience;
