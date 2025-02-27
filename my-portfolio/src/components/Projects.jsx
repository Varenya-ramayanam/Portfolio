import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiFramer, SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si";

const techIcons = {
  MongoDB: <SiMongodb className="text-green-500 text-2xl" />, 
  Express: <SiExpress className="text-white text-2xl" />, 
  React: <SiReact className="text-blue-400 text-2xl" />, 
  "Node.js": <SiNodedotjs className="text-green-400 text-2xl" />, 
  "Framer Motion": <SiFramer className="text-pink-400 text-2xl" />, 
  "React Three Fiber": <SiReact className="text-purple-400 text-2xl" />, 
  "Tailwind CSS": <SiTailwindcss className="text-blue-500 text-2xl" />, 
  "Next.js": <SiNextdotjs className="text-white text-2xl" />, 
  "Firebase": <SiFirebase className="text-yellow-400 text-2xl" />,
};


const projects = [
  {
    title: "My Portfolio",
    image: "images/portfolio.png",
    link: "https://your-portfolio-url.com",
    techStack: ["React", "Framer Motion", "React Three Fiber", "Tailwind CSS"],
  },
  {
    title: "Planorama",
    image: "images/planorama.png",
    link: "https://frontend-pam3.onrender.com/",
    techStack: ["React", "Node.js", "Express", "Firebase"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-20 mt-12 overflow-y-hidden">
      {/* Project Card */}
      <motion.div
        key={currentIndex}
        className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden p-5 flex flex-col items-center h-auto w-full max-w-4xl text-white relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
      >
        {/* Navigation Buttons (Left and Right of Title) */}
        <button
          className="absolute left-4 mt-2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
          onClick={prevProject}
        >
          <FaArrowLeft className="text-white" />
        </button>
        <h3 className="text-2xl font-semibold text-center text-blue-400">
          {projects[currentIndex].title}
        </h3>
        <button
          className="absolute right-4 mt-2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
          onClick={nextProject}
        >
          <FaArrowRight className="text-white" />
        </button>
        
        <div className="w-full h-60 md:h-96 flex items-center justify-center mt-4">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {projects[currentIndex].techStack.map((tech, i) => (
            <div key={i} className="flex items-center space-x-2 bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
              {techIcons[tech]}
              <span>{tech}</span>
            </div>
          ))}
        </div>
        {/* Project Link Icon */}
        <a 
          href={projects[currentIndex].link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-5 right-5 bg-blue-500 p-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
        >
          <FaExternalLinkAlt className="text-white" />
        </a>
      </motion.div>
      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-4">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === index ? "bg-blue-500 scale-110" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
