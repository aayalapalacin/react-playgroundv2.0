// src/app/singleCategory/[id]/page.tsx
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const idToInt = parseInt(params.id, 10);
  if (isNaN(idToInt)) notFound();

  return (
    <div>
      <h1>Category ID: {idToInt}</h1>
    </div>
  );
}
