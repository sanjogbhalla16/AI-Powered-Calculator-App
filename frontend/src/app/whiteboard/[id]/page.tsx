import { notFound } from "next/navigation";
import CanvasBoard from "@/components/CanvasBoard";

//now need to make changes in this

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
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <h1 className="text-3xl font-bold">InkFlow - Whiteboard ID: {id}</h1>
      <div className="w-full max-w-5xl border rounded-md mt-6">
        <CanvasBoard canvasBoardId={id} />
      </div>
    </div>
  );
}
