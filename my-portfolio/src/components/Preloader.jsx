import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-blue-600 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
