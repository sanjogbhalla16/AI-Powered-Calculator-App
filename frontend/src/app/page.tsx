"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const router = useRouter();

  const createNewWhiteBoard = () => {
    const newWhiteboardId = uuidv4();
    router.push(`/whiteboard/${newWhiteboardId}`);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8">
          InkFlow - Your magic calculator
        </h1>
        <ThemeToggle />
        <button
          onClick={createNewWhiteBoard}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Create New Whiteboard
        </button>
      </div>
    </ThemeProvider>
  );
}
