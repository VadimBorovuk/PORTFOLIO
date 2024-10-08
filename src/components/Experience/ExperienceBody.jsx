import {motion} from "framer-motion";
import ExperienceTechnologies from "./ExperienceTechnologies.jsx";

const ExperienceBody = ({role, company, year, description, technologies}) => {
  return (
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="w-full lg:w-1/4">
          <p className="mb-2 text-lg text-neutral-400">{year}</p>
        </motion.div>

        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{role} - <span
              className="text-sm text-purple-300">{company}</span></h6>
          <p className="mb-4 text-neutral-400">{description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {
              technologies.map((tech, idx) => (
                 <ExperienceTechnologies key={idx} tech={tech}/>
              ))
            }
          </div>
        </motion.div>
      </div>
  );
};

export default ExperienceBody;
