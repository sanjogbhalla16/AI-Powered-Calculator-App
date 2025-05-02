"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const router = useRouter();

  const handleCreateWhiteboard = () => {
    const newId = uuidv4();
    router.push(`/whiteboard/${newId}`);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-8">
        <h1 className="text-4xl font-bold">InkFlow - Your Magic Calculator</h1>
        <button
          onClick={handleCreateWhiteboard}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Create New Whiteboard
        </button>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
