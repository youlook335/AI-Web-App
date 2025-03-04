import React, { useEffect, useState } from "react";
import "../Styles/Cursor.css"; // Cursor کی اسٹائلنگ

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="custom-cursor" style={{ left: position.x, top: position.y }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Cursor"
      />
    </div>
  );
};

export default Cursor;
