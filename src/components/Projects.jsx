import {Element, Link} from 'react-scroll';
import {PROJECTS} from "../constants/index.js";
import Title from "./UI/Title.jsx";
import {getIconByStack} from "./UI/StackTechnologies.jsx";
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";


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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
              PROJECTS.map((item, idx) => (
                  <div
                      key={idx} className="flex flex-col bg-stone-900 rounded-3xl border border-neutral-800 transition-all duration-300 hover:bg-neutral-900">
                    <div className="h-[250px] overflow-hidden rounded-t-3xl">
                      <img
                          src={item.image}
                          alt={item.title}
                          className="mb-6 rounded object-cover min-h-[100%] w-full overflow-hidden transition-all duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-auto">
                      <h6 className="mb-2 font-semibold from-white">{item.title}</h6>
                      <div className="border-b border-neutral-800 h-[150px] w-full
                      scrollbar-thumb-rounded-lg scrollbar-track-gray-200 scrollbar-thumb-gray-700
                      overflow-x-hidden overflow-y-auto pb-3">
                        <p className="text-neutral-400 font-light tracking-tight">{item.description}</p>
                      </div>

                      <div className="flex flex-auto flex-col justify-between pt-3">
                        <div className="flex-col sm:flex-row flex gap-4 flex-auto justify-start">
                          <div
                              className="w-full p-6 sm:p-0 lg:w-1/5 flex justify-center items-center bg-neutral-800 font-bold tracking-tight rounded-xl text-md border border-neutral-700">
                            Stack
                          </div>
                          <div className="w-full lg:w-4/5 grid gap-3 grid-cols-2">
                            {
                              item.technologies.map((tech, idx) => (
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
                                    <div
                                        className="flex items-center flex-col gap-1 p-3 bg-neutral-800 transition-all duration-300 hover:bg-neutral-900 font-light tracking-tight rounded-xl border border-neutral-700 min-h-[70px] max-h-[70px]"
                                        >
                                      <div className="text-xl">
                                        {getIconByStack(tech)}
                                      </div>
                                      <div className="text-sm capitalize">
                                        {tech}
                                      </div>
                                    </div>
                                  </Link>

                              ))
                            }
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <a target="_blank"
                             className="py-2 px-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer transition-all duration-500 ease-in-out hover:from-blue-500 hover:to-blue-500 text-white font-bold rounded-2xl"
                             href={item.link}>Demo</a>
                          <div
                              className="flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-neutral-800 rounded-full p-3 cursor-pointer">
                            <a target="_blank"
                               className="cursor-pointer text-2xl transition-all duration-500 ease-in-out text-white font-bold rounded-2xl"
                               href={item.git}><FaGithub/></a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
              ))
            }
          </motion.div>
        </div>
      </Element>
  );
};

export default Projects;
