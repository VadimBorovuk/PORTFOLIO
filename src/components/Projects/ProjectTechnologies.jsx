import {Link} from "react-scroll";
import {getIconByStack} from "../UI/StackTechnologies.jsx";

const ProjectTechnologies = ({tech}) => {
  return (
      <Link
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
          <div className="text-xs	md:text-sm capitalize">
            {tech}
          </div>
        </div>
      </Link>
  );
};

export default ProjectTechnologies;
