import { notFound } from "next/navigation";
import CanvasBoard from "@/components/CanvasBoard";
import { v4 as uuidv4 } from "uuid";
import router from "next/router";

interface whiteboardIdPageProps {
  params: {
    id: string;
  };
}
const whiteboardIdPage = ({ params }: whiteboardIdPageProps) => {
  const { id } = params;
  if (!id) return notFound(); // Handles invalid cases

  const createNewWhiteBoard = () => {
    const newWhiteboardId = uuidv4();
    router.push(`/whiteboard/${newWhiteboardId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">InkFlow</h1>
      <button
        onClick={createNewWhiteBoard}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create New Whiteboard
      </button>
    </div>
  );
};

export default whiteboardIdPage;
