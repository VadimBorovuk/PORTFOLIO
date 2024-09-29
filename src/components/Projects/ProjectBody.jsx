import ProjectTechnologies from "./ProjectTechnologies.jsx";
import {FaGithub} from "react-icons/fa";

const ProjectBody = ({image, title, description, link, git, technologies}) => {
  return (
      <div
          className="flex flex-col bg-stone-900 rounded-3xl border border-neutral-800 transition-all duration-300 hover:bg-neutral-900">
        <div className="h-[250px] overflow-hidden rounded-t-3xl">
          <img
              src={image}
              alt={title}
              className="mb-6 rounded object-cover min-h-[100%] w-full overflow-hidden transition-all duration-300 hover:scale-110"
          />
        </div>
        <div className="p-5 flex flex-col flex-auto">
          <h6 className="mb-2 font-semibold from-white">{title}</h6>
          <div className="border-b border-neutral-800 h-[150px] w-full
                      scrollbar-thumb-rounded-lg scrollbar-track-gray-200 scrollbar-thumb-gray-700
                      overflow-x-hidden overflow-y-auto pb-3">
            <p className="text-neutral-400 font-light tracking-tight">{description}</p>
          </div>

          <div className="flex flex-auto flex-col justify-between pt-3">
            <div className="flex flex-col xl:flex-row gap-4 flex-auto justify-start">
              <div
                  className="w-full p-3 xl:p-6 xl:w-1/5 flex justify-center items-center bg-neutral-800 font-bold tracking-tight rounded-xl text-md border border-neutral-700">
                Stack
              </div>
              <div className="w-full xl:w-4/5 grid gap-3 grid-cols-2">
                {
                  technologies.map((tech, idx) => (
                    <ProjectTechnologies key={idx} tech={tech}/>
                  ))
                }
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a target="_blank"
                 className="py-2 px-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer transition-all duration-500 ease-in-out hover:from-blue-500 hover:to-blue-500 text-white font-bold rounded-2xl"
                 href={link}>Demo</a>
              <div
                  className="flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-neutral-800 rounded-full p-3 cursor-pointer">
                <a target="_blank"
                   className="cursor-pointer text-2xl transition-all duration-500 ease-in-out text-white font-bold rounded-2xl"
                   href={git}><FaGithub/></a>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
};

export default ProjectBody;
