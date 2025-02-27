import { motion } from "framer-motion";
import { Download } from "lucide-react"; // Importing download icon

const timeline = [
  {
    year: "2025",
    event: "Organized a college coding contest with 100+ participants",
  },
  {
    year: "2025",
    event: "Developed Planorama – AI-powered travel itinerary planner",
  },
  {
    year: "2024-2025",
    event: "Built Veda Gifts and Arts – An eCommerce platform for artists",
  },
  { year: "2024", event: "Completed 'DSA with Java' from GeeksforGeeks" },
  {
    year: "2024",
    event: "Web Development Internship at CodeClaus - API & UI Optimization",
  },
  {
    year: "2024",
    event: "Cybersecurity Virtual Internship (AICTE - Palo Alto Networks)",
  },
  {
    year: "2024",
    event: "AI Intern at Coincent (Languify) - Worked on ML & NLP",
  },
  { year: "2024", event: "Elite + Silver Medal in Cloud Computing - NPTEL" },
  {
    year: "2024",
    event: "Elite Medal in Programming & DSA using Python - NPTEL",
  },
  {
    year: "2023",
    event: "Elite + Silver Medal in Problem-Solving through C - NPTEL",
  },
  {
    year: "2022",
    event: "Started B.Tech in CSE at MVGR College of Engineering",
  },
  {
    year: "2022",
    event: "Completed Intermediate from Sri Chaitanya Junior College",
  },
  { year: "2020", event: "Completed schooling from The Sun School" },
];

const hobbies = [
  "🎤 Singing",
  "💻 Coding",
  "📚 Learning New Things",
  "🎶 Music",
  "🤖 Tech & Innovation",
  "🎭 Public Speaking",
];

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 py-12 flex flex-col items-center mt-12 relative ">
      {/* Resume Download Button */}
      <a
        href="/Varenya_Resume.pdf"
        download="Varenya_Resume.pdf"
        className="fixed top-20 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300"
      >
        <Download size={20} /> Resume
      </a>

      {/* Title */}
      <h2 className="text-4xl font-semibold text-blue-300 text-center mb-10">
        My Journey
      </h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

        {/* Timeline Items */}
        {timeline.map((item, index) => {
          const isEven = index % 2 === 0; // Even-indexed entries

          return (
            <motion.div
              key={index}
              className={`flex items-center w-full mb-8 ${
                isEven ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div
                className={`relative bg-gray-800 p-4 rounded-lg shadow-lg w-5/12 ${
                  isEven ? "text-left" : "text-right"
                }`}
              >
                {/* Dots positioning: Even -> Right, Odd -> Left */}
                <span
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full ${
                    isEven ? "right-[-8px]" : "left-[-8px]"
                  }`}
                ></span>
                <h3 className="text-xl font-semibold text-blue-300">
                  {item.year}
                </h3>
                <p className="text-gray-300">{item.event}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Hobbies Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-blue-300 mb-6">
          Hobbies & Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
            <span
              key={index}
              className="bg-gray-800 text-blue-300 px-4 py-2 rounded-lg shadow"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
