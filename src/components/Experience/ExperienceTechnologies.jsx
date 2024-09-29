import {Link} from "react-scroll";

const ExperienceTechnologies = ({tech}) => {
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
        <span
            className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 transition-all duration-500 hover:bg-neutral-800">{tech}</span>
      </Link>
  );
};

export default ExperienceTechnologies;
