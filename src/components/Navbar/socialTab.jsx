import {getIconByStack} from "../UI/StackTechnologies.jsx";
import {SOCIAL_LINKS} from "../../constants/index.js";

const LinkContact = ({name, link}) => {
  return (
      <a href={link} target="_blank"
         className="text-3xl rounded-full hover:border-gray-300 hover:shadow-lg hover:scale-110 transition-all cursor-pointer">
        {getIconByStack(name)}
      </a>
  )
}

const SocialTab = () => {
  return (
      <div className="flex justify-center items-center lg:justify-start gap-3 py-10">
        {
          SOCIAL_LINKS.map((item) => <LinkContact key={item.name} name={item.name} link={item.link}/>)
        }
      </div>
  );
};

export default SocialTab;
