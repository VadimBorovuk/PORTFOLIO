import {motion} from "framer-motion";
import {Element, Link} from 'react-scroll';
import BlockInfo from "./BlockInfo.jsx";
import {NAVBAR_LINKS} from "../../constants/index.js";
import SocialTab from "../Navbar/socialTab.jsx";
import Lottie from "lottie-react";
import animationData from "../../assets/Contacts.json";

const Contacts = () => {
  return (<Element className="lg:min-h-screen lg:py-20" key='contacts' name='contacts'>
    <div className="container mx-auto px-8 flex flex-col lg:flex-row align-baseline gap-8">
      <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: .5}}
          className="w-full lg:w-1/3 lg:pl-10"
      >
        <h1
            className="py-10 lg:py-10 text-center lg:text-left text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-white to-purple-500 bg-clip-text tracking-tight text-transparent"
        >Contact me</h1>
        <p className="text-center lg:text-left text-neutral-400">
          Ready to take your digital presence to the next level? Whether you're looking to launch a new website, revamp
          an existing one, or need expert advice on the best web technologies, I'm here to help. Reach out to discuss
          your project, ask questions, or just say hello.
        </p>

        <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-[250px] w-full"
        />

      </motion.div>

      <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: .5}}
          className="w-full flex flex-col sm:flex-row gap-4 lg:flex-col lg:w-1/3"
      >
        <BlockInfo
            title="email"
            content="borovyk17vadym27@gmail.com"
            link="mailto:borovyk17vadym27@gmail.com"
        />
        <BlockInfo
            title="Messanger"
            content="Vadym Borovyk"
            link="http://m.me/profile?id=100010091655159"
        />

      </motion.div>

      <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 200}}
          transition={{duration: .5}}
          className="w-full lg:w-1/3"
      >
        <ul className="flex flex-col sm:flex-row lg:flex-col justify-center items-center sm:items-start gap-3 lg:gap-2">
          {
            NAVBAR_LINKS.map((link, idx) => <li
                    key={idx}
                    className="text-center capitalize font-bold tracking-tight relative text-xl rounded-3xl cursor-pointer">
                  <Link
                      smooth={true}
                      duration={800}
                      to={link}
                      activeClass="text-purple-500"
                      className="cursor-pointer hover:text-purple-500"
                      spy={true}
                      offset={-70}
                  >{link}
                  </Link>
                </li>
            )
          }
        </ul>

          <SocialTab/>

        <div className="pb-10 lg:pb-0 text-center lg:text-left">
          <p className="font-bold"> Copyright © All right reserved - | 2024</p>
          <p className="font-thin">Build by Vadym Borovyk</p>
        </div>
      </motion.div>
    </div>
  </Element>);
};

export default Contacts;
