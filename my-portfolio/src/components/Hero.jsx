import { useNavigate } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "./HeroImage";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-gray-900 overflow-x-hidden">
      <section
        id="hero"
        className="h-full lg:h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-16"
      >
        {/* 3D Object Placeholder */}
        <motion.div
          className="w-120 h-120 flex items-center justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05}}
        >
          <HeroImage />
        </motion.div>

        {/* Right Side - Introduction */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-blue-300 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hi, I'm <span className="text-blue-500">Varenya Ramayanam</span>
          </motion.h1>

          <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed text-justify">
            <span>
              <Typewriter
                words={[
                  `Welcome to my page! I'm Varenya Ramayanam, and I'm thrilled to have you here. Please take a moment to explore my corner of the internet. Here, you'll find a showcase of my skills, a glimpse into who I am, and an overview of the projects I've had the privilege to work on. Whether you're here out of curiosity, seeking collaboration opportunities, or simply to get to know me better, I hope you find what you're looking for. Thank you for visiting, and feel free to reach out if you have any questions or just want to say hello!`,
                ]}
                loop={1}
                cursor
                typeSpeed={40}
              />
            </span>
          </p>
        </div>

        {/* Contact Icon - Bottom Right */}
        <div
          className="lg:absolute bottom-0 lg:bottom-6 right-0 lg:right-6 md:bottom-10 md:right-10 cursor-pointer p-4 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition transform lg:hover:scale-105"
          onClick={() => navigate("/contact")}
        >
          <MdMessage className="text-3xl md:text-4xl text-white animate-bounce" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
