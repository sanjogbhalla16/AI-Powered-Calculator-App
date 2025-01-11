import React, { useRef, useState } from "react";

const HomeScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: )
  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default HomeScreen;
