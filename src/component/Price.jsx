import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Price = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const newBalloons = Array.from({ length: 50 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100 + "vw",
      delay: Math.random() * 3,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-blue-500 overflow-hidden">
      <h1 className="text-white text-5xl font-bold z-10">Aaya Celebration</h1>
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{ duration: 3, delay: balloon.delay }}
          className="absolute text-3xl"
          style={{ left: balloon.left }}
        >
          🎈
        </motion.div>
      ))}
    </div>
  );
};

export default Price;