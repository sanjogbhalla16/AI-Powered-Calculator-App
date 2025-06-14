import { notFound } from "next/navigation";
import CanvasBoard from "@/components/CanvasBoard";

interface WhiteboardIdPageProps {
  params: {
    id: string;
  };
}

// ✅ Mark the function as async
export default async function WhiteboardIdPage({
  params,
}: WhiteboardIdPageProps) {
  //const id = params.id; // this will function when the function is async and the await is not a promise
  const { id } = await params;
  if (!id) return notFound();

  return (
    <>
      <h1 className="text-1xl font-bold">InkFlow - Whiteboard ID: {id}</h1>
      <CanvasBoard canvasBoardId={id} />
    </>
  );
}
