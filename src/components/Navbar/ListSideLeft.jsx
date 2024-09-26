import {FaHouseChimneyUser, FaInstagram} from "react-icons/fa6";
import {Link} from "react-scroll";
import logoUser from "../../assets/vb-logo.svg";
import { FaBoxesStacked } from "react-icons/fa6";
import { FcTimeline } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";


import SocialTab from "./socialTab.jsx";

const ListSideLeft = ({links}) => {

  const getIconByNameLink = (link) => {
    switch (link){
      case 'about':
        return <FaHouseChimneyUser title={link}/>
      case 'technologies':
        return <FaBoxesStacked title={link}/>
      case 'experience':
        return <FcTimeline title={link}/>
      case 'projects':
        return <GrProjects title={link}/>
      case 'contacts':
        return <MdContactMail title={link}/>
      default:
        return <></>
    }
  }

  return (
      <div className="z-30 flex flex-col justify-between h-full">
        <ul className="flex flex-col items-center justify-center gap-4">
          <Link className="cursor-pointer my-4" to='head' activeClass='active' spy={true} smooth={true} duration={800}>
            <img className="w-14 cursor-pointer transition-all duration-300 hover:scale-110" src={logoUser}
                 alt="logo"/>
          </Link>
          {
            links.map((link, idx) => <li
                    key={idx}
                    className="relative text-xl w-fit block cursor-pointer">
                  <Link
                      smooth={true}
                      duration={800}
                      to={link}
                      activeClass="text-purple-500"
                      className="cursor-pointer hover:text-purple-500 bg"
                      spy={true}
                      offset={-70}
                  >
                    {getIconByNameLink(link)}
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
  );
};

export default ListSideLeft;
