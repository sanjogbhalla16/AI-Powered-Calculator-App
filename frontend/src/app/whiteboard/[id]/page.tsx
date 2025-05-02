import { notFound } from "next/navigation";
import CanvasBoard from "@/components/CanvasBoard";

interface WhiteboardIdPageProps {
  params: {
    id: string;
  };
}

const WhiteboardIdPage = ({ params }: WhiteboardIdPageProps) => {
  const { id } = params;

  if (!id) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <h1 className="text-3xl font-bold">InkFlow - Whiteboard ID: {id}</h1>
      <div className="w-full max-w-5xl border rounded-md mt-6">
        <CanvasBoard canvasBoardId={id} />
      </div>
    </div>
  );
};

export default WhiteboardIdPage;
