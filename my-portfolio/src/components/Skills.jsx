import { motion, useScroll } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiEjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiTensorflow,
} from "react-icons/si";
import { DiMysql, DiHtml5, DiCss3 } from "react-icons/di";

export default function SkillsTimeline() {
  const { scrollYProgress } = useScroll(); // Get scroll progress

  const skills = [
    {
      category: "Web Technologies",
      items: [
        {
          name: "React.js",
          percentage: 70,
          icon: <FaReact className="text-blue-500" />,
        },
        // {
        //   name: "Redux",
        //   percentage: 80,
        //   icon: <SiRedux className="text-purple-600" />,
        // },
        {
          name: "Node.js",
          percentage: 75,
          icon: <FaNodeJs className="text-green-500" />,
        },
        {
          name: "Express.js",
          percentage: 75,
          icon: <SiExpress className="text-gray-600" />,
        },
        {
          name: "HTML",
          percentage: 95,
          icon: <DiHtml5 className="text-orange-500" />,
        },
        {
          name: "CSS",
          percentage: 90,
          icon: <DiCss3 className="text-blue-500" />,
        },
        {
          name: "Tailwind CSS",
          percentage: 80,
          icon: <SiTailwindcss className="text-teal-500" />,
        },
        {
          name: "EJS",
          percentage: 70,
          icon: <SiEjs className="text-gray-600" />,
        },
        { name: "REST API", percentage: 85, icon: "🔌" },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "C", percentage: 85, icon: <SiC className="text-blue-500" /> },
        {
          name: "C++",
          percentage: 85,
          icon: <SiCplusplus className="text-blue-700" />,
        },
        {
          name: "Java",
          percentage: 80,
          icon: <FaJava className="text-red-600" />,
        },
        {
          name: "Python",
          percentage: 80,
          icon: <FaPython className="text-yellow-600" />,
        },
      ],
    },
    {
      category: "Database Management",
      items: [
        {
          name: "MongoDB",
          percentage: 70,
          icon: <SiMongodb className="text-green-600" />,
        },
        {
          name: "SQL",
          percentage: 80,
          icon: <DiMysql className="text-blue-500" />,
        },
        {
          name: "PostgreSQL",
          percentage: 50,
          icon: <SiPostgresql className="text-blue-600" />,
        },
        {
          name: "Firebase Firestore",
          percentage: 70,
          icon: <SiFirebase className="text-yellow-500" />,
        },
      ],
    },
    {
      category: "Other Skills",
      items: [
        {
          name: "Machine Learning",
          percentage: 75,
          icon: <SiTensorflow className="text-orange-500" />,
        },
        {
          name: "Git",
          percentage: 85,
          icon: <FaGitAlt className="text-red-500" />,
        },
        { name: "Competitive Programming", percentage: 60, icon: "🏆" },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10 w-full mt-15 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed hidden md:top-11 lg:top-16 left-0 right-0 h-2 bg-yellow-500 origin-left z-50 md:block"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {skills.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl text-blue-300 mb-5 text-center">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-blue-500"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
