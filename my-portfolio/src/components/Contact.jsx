import { useState, useEffect } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MessageSquare } from "lucide-react"; // Import feedback icon

export default function Contact() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedbackCount, setFeedbackCount] = useState(0);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/feedback/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ user: "", email: "", message: "" }); // Reset form
        fetchFeedbackCount(); // Refresh count after submitting
      } else {
        setResponseMessage(data.error);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setResponseMessage("Failed to submit feedback. Please try again.");
    }

    setLoading(false);
  };

  // Fetch total feedback count
  const fetchFeedbackCount = async () => {
    try {
        const response = await fetch("http://localhost:5000/v1/count");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Feedback count fetched:", data.count);
        setFeedbackCount(data.count); // ✅ Update state with fetched count
    } catch (error) {
        console.error("Error fetching feedback count:", error);
    }
};



  // Fetch feedback count when component mounts
  useEffect(() => {
    fetchFeedbackCount();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col justify-between text-white">
      <div className="flex mt-20 flex-col items-center">
        <div className="flex flex-grow items-center justify-center w-full mt-10 px-6 md:px-16">
          <div className="relative w-full md:w-1/2 flex flex-col md:flex-row justify-around items-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-5 text-blue-300 text-center"
              >
                Leave a Feedback :)
              </motion.h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Feedback"
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Hide Lottie animation on small screens */}
            <div className="hidden flex-col md:flex w-full md:w-1/2 items-center justify-center relative">
              <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/634cdffd-9486-4ad9-9bf5-15c58c50dee2/RpzB8bZNY4.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
            {/* Feedback Count Section (Placed at the bottom right) */}
            <div className="md:absolute bottom-2 right-2 bg-gray-700 p-4 rounded-lg shadow-lg flex items-center space-x-2">
                <MessageSquare className="text-blue-400" size={28} />
                <span className="text-l font-semibold">{feedbackCount}</span>
              </div>
          </div>
        </div>
      </div>
      <Footer color="black" />
    </div>
  );
}
