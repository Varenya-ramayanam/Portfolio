import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsStack } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiFramer, SiMongodb, SiThreedotjs } from "react-icons/si";
export default function Footer({ color }) {
  const [showTechStack, setShowTechStack] = useState(false);
  return (
    <footer
      className={`bg-${color} text-white py-6 px-4 md:px-10 lg:px-20 w-full flex`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-center"
        >
          &copy; Varenya Ramayanam | {new Date().getFullYear()} | All Rights
          Reserved
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4 mt-4"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
      <div className="hidden md:flex flex-col items-center relative">
        {showTechStack && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-12 bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-5"
          >
            <div className="flex flex-col gap-5 text-4xl cursor-pointer">
              <FaReact className="text-blue-500" title="React" />
              <SiThreedotjs className="text-gray-300" title="React Three Fiber" />
              <SiFramer className="text-pink-500" title="Framer Motion" />
              <SiMongodb className="text-green-500" title="MongoDB" />
            </div>
          </motion.div>
        )}
        <BsStack
          className="hover:text-blue-400 text-4xl cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => setShowTechStack(!showTechStack)}
        />
      </div>
    </footer>
  );
}
