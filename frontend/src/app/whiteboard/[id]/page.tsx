import { notFound } from "next/navigation";
import CanvasBoard from "@/components/CanvasBoard";

interface whiteboardIdPageProps {
  params: {
    id: string;
  };
}
const whiteboardIdPage = ({ params }: whiteboardIdPageProps) => {
  const { id } = params;
  if (!id) return notFound(); // Handles invalid cases
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Whiteboard ID: {id}</h1>
      <CanvasBoard canvasBoardId={id} />
    </div>
  );
};

export default whiteboardIdPage;
