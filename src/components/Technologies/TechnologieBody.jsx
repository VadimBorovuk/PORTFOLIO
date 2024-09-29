import {motion} from "framer-motion";
import {getIconByStack} from "../UI/StackTechnologies.jsx";

const TechnologieBody = ({idx, item, variants}) => {
  return (
      <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="flex items-start justify-center w-full rounded-2xl border-4 border-neutral-800 py-5 md:py-4">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {getIconByStack(item)}
        </div>
      </motion.div>
  );
};

export default TechnologieBody;
