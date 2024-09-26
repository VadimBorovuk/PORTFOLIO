import {TiHtml5} from "react-icons/ti";
import {IoLogoCss3} from "react-icons/io";
import {RiTailwindCssFill} from "react-icons/ri";
import {TbBrandJavascript} from "react-icons/tb";
import {FaGithub, FaGoogle, FaLinkedin, FaNodeJs, FaReact, FaTelegramPlane, FaVuejs} from "react-icons/fa";
import {SiExpress, SiMongodb,SiFramer, SiTypescript,SiCreatereactapp, SiRedux, SiI18Next, SiStyledcomponents, SiMui,SiVuetify, SiSass} from "react-icons/si";
import { MdSettingsApplications } from "react-icons/md";
import { PiMouseScroll } from "react-icons/pi";
import {GiDjinn} from "react-icons/gi";
import {FaInstagram} from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";


export const getIconByStack = (item) => {
  switch (item) {
    case 'html':
      return <TiHtml5 title={item} className="text-red-500"/>
    case 'css':
      return <IoLogoCss3 title={item} className="text-blue-700"/>
    case 'scss':
      return <SiSass title={item} className="text-pink-500"/>
    case 'tailwind':
      return <RiTailwindCssFill title={item} className="text-blue-400"/>
    case 'js':
      return <TbBrandJavascript title={item} className="text-yellow-400"/>
    case 'react':
      return <FaReact title={item} className="text-blue-500"/>
    case 'vue':
      return <FaVuejs title={item} className="text-green-400"/>
    case 'vuetify':
      return <SiVuetify title={item} className="text-green-400"/>
    case 'typescript':
      return <SiTypescript title={item} className="text-blue-700"/>
    case 'redux-toolkit':
      return <SiRedux title={item} className="text-purple-500"/>
    case 'i18next':
      return <SiI18Next title={item} className="text-green-400"/>
    case 'styledComponent':
      return <SiStyledcomponents title={item} className="text-yellow-300"/>
    case 'materialUI':
      return <SiMui title={item} className="text-blue-700"/>
    case 'gsap':
      return <MdSettingsApplications title={item} className="text-green-400"/>
    case 'node':
      return <FaNodeJs title={item} className="text-green-400"/>
    case 'express':
      return <SiExpress title={item} className="text-gray-400"/>
    case 'mongoDB':
      return <SiMongodb title={item} className="text-green-400"/>
    case 'react-scroll':
      return <PiMouseScroll title={item} className="text-green-400"/>
    case 'framer-motion':
      return <SiFramer title={item} className="text-neutral-500"/>
    case 'react-icons':
      return <SiCreatereactapp title={item} className="text-pink-500"/>
    case 'google':
      return <FaGoogle title={item} className="text-red-500"/>
    case 'chatGpt':
      return <IoLogoCss3 title={item} className="text-blue-700"/>
    case 'gitlab':
      return <RiTailwindCssFill title={item} className="text-blue-400"/>
    case 'github':
      return <FaGithub title={item} className="text-neutral-400"/>
    case 'djinni':
      return <GiDjinn title={item} className="text-blue-400"/>
    case 'linkedin':
      return <FaLinkedin title={item} className="text-sky-600"/>
    case 'telegram':
      return <FaTelegramPlane title={item} className="text-blue-400"/>
    case 'messenger':
      return <FaNodeJs title={item} className="text-purple-500"/>
    case 'instagram':
      return <FaInstagram title={item} className="text-orange-500"/>
    case 'firebase':
      return <IoLogoFirebase title={item} className="text-orange-400"/>
    default:
      return <></>
  }
}
