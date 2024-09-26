import {motion} from 'framer-motion';
import DuplicateBanner from "./Dublicate.jsx";

const lengthBanners = Array.from({length: 10}, (_, i) => i + 1);

const Banner = () => {
  return (
      <div className="mt-16 overflow-hidden whitespace-nowrap bg-neutral-900 p-8 z-50"> {/* Контейнер стрічки */}
        <motion.div
            className="flex space-x-8"
            animate={{x: ['100%', '-100%']}} // Рух з 0% до -100%
            transition={{
              ease: "linear", // Лінійний рух
              repeat: Infinity, // Безкінечний повтор
              duration: 20, // Тривалість руху (регулюється)
            }}
        >
          {lengthBanners.map((_, idx) => <DuplicateBanner key={idx}/>)}
        </motion.div>
      </div>
  );
};

export default Banner;
