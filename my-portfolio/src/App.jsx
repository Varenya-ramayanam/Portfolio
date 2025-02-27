import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-gray-900 min-h-screen text-white">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
