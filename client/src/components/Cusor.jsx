// CursorGradient.js
import React, { useEffect, useState } from "react";
import "../assets/css/cusor.css"; // Import CSS file with styles for cursor gradient

const CursorGradient = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPos({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
     document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-gradient">
      <div
        className="gradient"
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
      ></div>
    </div>
  );
};

export default CursorGradient;
