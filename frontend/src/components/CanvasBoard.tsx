"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

interface CanvasBoardProps {
  canvasBoardId: string;
}

const CanvasBoard: React.FC<CanvasBoardProps> = ({ canvasBoardId }) => {
  //useRef is a React Hook that lets you reference a value that's not needed for rendering.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  //useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "pink";
    ctx.fillRect(10, 10, 150, 100);

    const handleMouseDown = (e: MouseEvent) => {
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };
    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing]);
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Draw on the Canvas</h2>
      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        style={{ border: "1px solid black", cursor: "crosshair" }}
      />
    </div>
  );
};

export default CanvasBoard;
