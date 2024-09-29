import Navbar from "./components/Navbar/Navbar.jsx";
import User from "./components/User.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Banner from "./components/Banner/Banner.jsx";
import {useEffect, useState} from "react";
import { FaArrowUp } from "react-icons/fa6";
import {getBackgroundColor} from "./components/UI/Design.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";


const App = () => {
  const colorBack = localStorage.getItem('color') || 'third'
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility when scroll is over a certain threshold
  const toggleVisibility = () => {
    if (window.scrollY >= 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);



  return (
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          {getBackgroundColor(colorBack)}
        </div>
        <Navbar/>
        <User/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contacts/>
        <button
            onClick={scrollToTop}
            className={`fixed transition-opacity duration-500 bottom-4 right-4 p-3 text-white rounded-full shadow-lg
                text-2xl ${!isVisible ? 'opacity-0' : 'opacity-100'}
                 bg-violet-500 hover:scale-110 transition-all cursor-pointer`}
        >
          <FaArrowUp/>
        </button>
      </div>
  )
}

export default App
