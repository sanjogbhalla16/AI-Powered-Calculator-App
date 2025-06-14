"use client";
import React, { useRef, useEffect, useState } from "react";
import { colors } from "./swatch";
import { ColorSwatch, Group, rgba } from "@mantine/core";
import axios from "axios";
import { Button } from "./ui/button";

//Yeh bhi ho jaega 

interface CanvasBoardProps {
  canvasBoardId: string;
}

const CanvasBoard: React.FC<CanvasBoardProps> = ({ canvasBoardId }) => {
  //useRef is a React Hook that lets you reference a value that's not needed for rendering.
  const canvasRef = useRef<HTMLCanvasElement>(null); //Access the canvas DOM element directly
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("rgba(255, 255, 255)");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
      resetCanvas();
      setReset(false);
    }
  }, [reset]);

  //useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      console.log(ctx);

      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - canvas.offsetTop;
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
        //reDrawPreviousData(ctx);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.backgroundColor = "black";
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const resetCanvas = () =>{
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if(ctx){
        ctx.clearRect(0,0,canvas.width,canvas.height)
      }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = color;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
      }
    }
  };
  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute top-0 left-0 width-full height-full"
        onMouseDown={startDrawing}
        onMouseOut={stopDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
      />
    </div>
  );
};

export default CanvasBoard;
