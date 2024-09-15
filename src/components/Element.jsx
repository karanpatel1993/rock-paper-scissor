import React, { useState, useEffect } from "react";

const Element = ({ element, id, onCollision }) => {
  const gridWidth = window.innerWidth;
  const gridHeight = window.innerHeight;

  const [position, setPosition] = useState({
    x: Math.random() * (gridWidth - 50),
    y: Math.random() * (gridHeight - 50),
  });

  const directions = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: -1, y: -0.5 },
    { x: 1, y: -0.5 },
    { x: -0.5, y: -1 },
    { x: 0.5, y: -1 },
    { x: -1, y: 0.5 },
    { x: 1, y: 0.5 },
    { x: -0.5, y: 1 },
    { x: 0.5, y: 1 },
  ];

  // Move the element in a random direction within the grid bounds
  const moveElement = () => {
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    const stepSize = 20;

    setPosition((prevPosition) => {
      const newX = Math.max(
        0,
        Math.min(gridWidth - 50, prevPosition.x + randomDirection.x * stepSize)
      );
      const newY = Math.max(
        0,
        Math.min(gridHeight - 50, prevPosition.y + randomDirection.y * stepSize)
      );

      // Call onCollision to check for any collisions and pass the updated position
      onCollision(id, { x: newX, y: newY });

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const interval = setInterval(moveElement, 100); // Move element every 100ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPosition({
        x: Math.random() * (gridWidth - 50),
        y: Math.random() * (gridHeight - 50),
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="absolute text-4xl transition-transform duration-100"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {element}
    </div>
  );
};

export default Element;
