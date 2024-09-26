import {Element} from 'react-scroll';
import {TECHNOLOGIES_LIST} from "../constants/index.js";
import {motion} from "framer-motion"
import React, {useEffect, useRef, useState} from "react";
import {getIconByStack} from "./UI/StackTechnologies.jsx";
import Banner from "./Banner/Banner.jsx";

const variantsSettings = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  },
})

const Technologies = () => {

  const [scaleValue, setScaleValue] = useState(0.7); // Початкове значення scale
  const blockRef = useRef(null); // Реф для блоку, висоту і положення якого будемо відслідковувати

  useEffect(() => {
    const handleScroll = () => {
      const block = blockRef.current;
      if (block) {
        const blockTop = block.getBoundingClientRect().top; // Відстань від верху сторінки до блоку
        const windowHeight = window.innerHeight;
        const blockHeight = block.offsetHeight;

        // Пропорція прокрутки: від 0 (вгорі екрану) до 1 (внизу екрану)
        let scrollRatio = (windowHeight - blockTop) / (windowHeight + blockHeight);

        // Обмежуємо значення від 0 до 1
        scrollRatio = Math.max(0, Math.min(1, scrollRatio));

        // Інтерполюємо значення scale від 0.7 до 1 з точністю до чотирьох знаків
        const newScaleValue = (0.7 + 0.3 * scrollRatio).toFixed(4);
        setScaleValue(newScaleValue);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
      <Element className="lg:min-h-screen mb-10" key='technologies' name='technologies'>
        <div className="container mx-auto px-8 sticky top-0">
          <div
              style={{
                transform: `scale(${scaleValue}) translate3d(0, 0, 0)`,
                transition: 'transform 0.1s ease-out',
              }}
              ref={blockRef}>
            <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: .5}}
            >
              <h1
                  className="pb-10 lg:pb-12 lg:pt-12 text-3xl md:text-4xl lg:text-6xl lg:px-6 font-bold  text-center bg-gradient-to-l from-white to-purple-500 bg-clip-text tracking-tight text-transparent">
                Technologies
              </h1>
            </motion.div>
            <motion.div
                variants={variantsSettings(0)}
                initial="hidden"
                animate="visible"
                className="text-center">
              <div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-10 w-[100px] sm:w-[400px] md:w-[500px] lg:w-full mx-auto">
                {TECHNOLOGIES_LIST.map((item, idx) => <motion.div
                        variants={variantsSettings(2.5 + idx + 2)}
                        initial="initial"
                        animate="animate"
                        key={idx}
                        className="flex items-start justify-center w-full rounded-2xl border-4 border-neutral-800 py-5 md:py-4">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        {getIconByStack(item)}
                      </div>
                    </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        <Banner/>
      </Element>
  );
};

export default Technologies;
