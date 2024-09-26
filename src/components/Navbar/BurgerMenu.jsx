import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import {NAVBAR_LINKS} from "../../constants/index.js";
import {Link} from "react-scroll";
import SelectBackground from "./selectBackground.jsx";

const BurgerMenu = ({value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the drawer
  const drawerVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    closed: {
      x: '-100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
      <div className="relative">
        {/* Burger icon */}
        <button
            className="z-20 p-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
        </button>

        {/* Drawer */}
        <motion.div
            className="fixed top-0 left-0 w-64 h-full bg-neutral-900 text-white p-6 shadow-lg z-10"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={drawerVariants}
        >
          <SelectBackground value={value} onChange={onChange}/>

          <ul className="flex flex-col items-start gap-6 pt-10">
            {
              NAVBAR_LINKS.map((link, idx) => <li
                      key={idx}
                      className="pl-7 capitalize font-bold tracking-tight relative text-xl w-fit block after:block after:content-['']
                       after:absolute after:h-[3px] rounded-3xl after:bg-amber-50 after:w-full
                      after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer">
                    <Link
                        onClick={() => setIsOpen(!isOpen)}
                        smooth={true}
                        duration={800}
                        to={link}
                        activeClass="text-purple-500"
                        className="cursor-pointer hover:text-purple-500 text-sm lg:text-lg xl:text-xl"
                        spy={true}
                        offset={-70}
                    >{link}
                    </Link>
                  </li>
              )
            }
          </ul>
        </motion.div>
      </div>
  );
};

export default BurgerMenu;
