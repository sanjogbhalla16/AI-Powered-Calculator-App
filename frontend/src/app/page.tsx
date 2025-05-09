"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const handleCreateWhiteboard = () => {
    const newId = uuidv4();
    router.push(`/whiteboard/${newId}`);
  };
  //this cursor only work on the parent if you use on element which is a child then you need to add at the parent level
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-8">
        <h1 className="text-4xl font-bold">InkFlow - Your Magic Calculator</h1>
        <Button onClick={handleCreateWhiteboard} className="cursor-pointer">
          Create New Whiteboard
        </Button>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
