import logoUser from '../../assets/vb-logo.svg'
import {NAVBAR_LINKS} from "../../constants/index.js";
import {Link} from 'react-scroll'
import {useEffect, useState} from "react";
import ListSideLeft from "./ListSideLeft.jsx";
import { RiMenu3Line } from "react-icons/ri";
import {motion} from "framer-motion"
import BurgerMenu from "./BurgerMenu.jsx";
import SelectBackground from "./selectBackground.jsx";


const Navbar = () => {

  const [navBg, setNavBg] = useState(false);
  const [colorBackground, setColorBackground] = useState(localStorage.getItem('color') || 'first')

  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavBg(true);  // Ставимо інший колір фону після прокрутки вниз
    } else {
      setNavBg(false); // Повертаємо початковий колір фону
    }
  };

  const setColorForBackground = (e) => {
    const colorName = e.target.value
    setColorBackground(colorName)
    localStorage.setItem('color', colorName)
    window.location.reload();
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);

  return (
      <>
        <div>
          <motion.nav
              initial={{y: -100, opacity: 0}}
              animate={{y: !navBg ? 0 : -80, opacity: 1}} // Adjust the -80 to match your navbar height
              transition={{duration: 0}}
              className={
                `mb-20 flex items-center justify-between py-6 fixed top-0 left-0 w-full z-10 transition-transform duration-500 ease-in-out
        ${!navBg ? 'transform translate-y-0' : 'transform -translate-y-full'} hidden lg:flex
       `}>
            <div className="flex flex-shrink-0 items-center">
              <Link
                  className="cursor-pointer"
                  to='head'
                  smooth={true}
                  duration={800}>
                <img className="mx-2 w-15 cursor-pointer transition-all duration-300 hover:scale-110" src={logoUser}
                     alt="logo"/>
              </Link>
            </div>

            <ul className="flex items-start gap-6">
              {
                NAVBAR_LINKS.map((link, idx) => <li
                        key={idx}
                        className="capitalize font-bold tracking-tight relative text-xl w-fit block after:block after:content-['']
                       after:absolute after:h-[3px] rounded-3xl after:bg-amber-50 after:w-full
                      after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer">
                      <Link
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
            <div className="m-2 flex items-center mx-6 justify-center gap-4 text-sm">
             <SelectBackground value={colorBackground} onChange={setColorForBackground}/>
            </div>
          </motion.nav>
          <div className={`fixed top-0 left-0 h-full w-12 z-10 transition-opacity duration-500
         ease-in-out bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]
         ${!navBg ? 'opacity-0' : 'opacity-100'} hidden lg:block
          `}>
            <ListSideLeft links={NAVBAR_LINKS}/>
          </div>
        </div>

        <div className="bg-[#181919] flex justify-between py-1 flex-shrink-0 items-center fixed top-0 left-0 w-full z-50 lg:hidden px-5">
          <Link
              className="cursor-pointer"
              to='head'
              smooth={true}
              duration={800}>
            <img className="w-15 cursor-pointer transition-all duration-300 hover:scale-110" src={logoUser}
                 alt="logo"/>
          </Link>
          <BurgerMenu value={colorBackground} onChange={setColorForBackground}/>
        </div>
      </>

  );
};

export default Navbar;
