"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

interface CanvasBoardProps {
  canvasBoardId: string;
}

const CanvasBoard: React.FC<CanvasBoardProps> = ({ canvasBoardId }) => {
  //useRef is a React Hook that lets you reference a value that's not needed for rendering.
  const canvasRef = useRef<HTMLCanvasElement>(null); //Access the canvas DOM element directly
  const [context, setContext] = useState(null); //Holds the 2D drawing context from the canvas
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("black");
  const [linewidth, setLineWidth] = useState(3);
  const [drawingAction, setDrawingAction] = useState([]); //drawing history
  const [currentPath, setCurrentPath] = useState([]); //store the current path which includes mouse coordinates as the user draws.
  const [currentStyle, setCurrentStyle] = useState({
    color: "black",
    linewidth: 3,
  });

  //useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      console.log(ctx);

      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.lineCap = "round";
        ctx.lineWidth = linewidth;
      }
    }
  }, []);
  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute top-0 left-0 width-full height-full"
      />
    </div>
  );
};

export default CanvasBoard;
