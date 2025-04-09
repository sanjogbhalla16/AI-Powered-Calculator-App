import React, { useEffect, useRef, useState } from "react";
import { SWATCHES } from "@/constants";
import { ColorSwatch, Group } from "@mantine/core";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Draggable from "react-draggable";

interface Response {
  expr: string;
  result: string;
  assign: boolean;
}

interface GeneratedResult {
  expression: string;
  answer: string;
}

const HomeScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("rgb(255,255,255)");
  const [reset, SetReset] = useState(false);
  const [result, setResult] = useState<GeneratedResult>();
  const [latexExpressions, setLatexExpressions] = useState<
    Array<{ id: number; expression: string }>
  >([]);
  const [dictOfVars, setDictOfVars] = useState({});

  useEffect(() => {
    if (reset) {
      resetCanvas();
      setLatexExpressions([]);
      setResult(undefined);
      setDictOfVars({});
      SetReset(false);
    }
  }, [reset]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
        },
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const sendData = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/calculate`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          image: canvas.toDataURL("image/png"),
          dict_of_vars: dictOfVars,
        },
      });

      const resp = await response.data;
      console.log("Response: ", resp);

      resp.data.forEach((data: Response) => {
        if (data.assign) {
          setDictOfVars({
            ...dictOfVars,
            [data.expr]: data.result,
          });
        }
        setTimeout(() => {
          setLatexExpressions((prev) => [
            ...prev,
            {
              id: Date.now(),
              expression: `\\(\\LARGE{${data.expr} = ${data.result}}\\)`,
            },
          ]);
        }, 1000);
      });
    }
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
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

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
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

  const deleteExpression = (id: number) => {
    setLatexExpressions((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <>
      {/* Toolbar for Color Selection and Buttons */}
      <div className="flex justify-center items-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md shadow-md">
        <Button
          onClick={() => SetReset(true)}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Reset
        </Button>
        <Group className="flex gap-2">
          {SWATCHES.map((swatchColor: string) => (
            <ColorSwatch
              key={swatchColor}
              color={swatchColor}
              className="cursor-pointer border-2 border-white hover:scale-110 transition"
              onClick={() => setColor(swatchColor)}
            />
          ))}
        </Group>
        <Button
          onClick={sendData}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Calculate
        </Button>
      </div>

      {/* Canvas Area */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute top-0 left-0 w-full h-full"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={draw}
      />

      {/* Expression Cards */}
      <div className="absolute top-16 right-10 flex flex-col gap-3">
        {latexExpressions.map((exp) => (
          <Draggable key={exp.id}>
            <div className="relative p-4 bg-gray-700 text-white rounded-lg shadow-lg w-64 hover:scale-105 transition">
              <div className="latex-content">{exp.expression}</div>
              <button
                onClick={() => deleteExpression(exp.id)}
                className="absolute top-2 right-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-full p-1"
              >
                ✕
              </button>
            </div>
          </Draggable>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
