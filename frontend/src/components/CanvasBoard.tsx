"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const CanvasBoard: React.FC = () => {
  //useRef is a React Hook that lets you reference a value that's not needed for rendering.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  //useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
  useEffect(() => {}, []);
  return <div>CanvasBoard</div>;
};

export default CanvasBoard;
