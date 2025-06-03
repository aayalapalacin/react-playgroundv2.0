// src/app/singleCategory/[id]/page.tsx

export default function Page({ params }: any) {
  return (
    <div>
      <h1>ID: {params?.id}</h1>
    </div>
  );
}
