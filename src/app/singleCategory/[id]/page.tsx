import { categoriesArray } from "@/app/assets/categories";
import CategoryCard from "@/components/categoryCard";
import { notFound } from "next/navigation";

// Keep it as a plain object here
interface PageProps {
  params: { id: string };
}

// Make the component async (Next.js expects this now)
export default async function Page(props: Promise<PageProps>) {
  const { params } = await props;
  const idToInt = parseInt(params.id, 10);

  const selectedCategory = categoriesArray.find(
    (category) => category.id === idToInt
  );

  if (!selectedCategory) {
    notFound();
  }

  return (
    <div className="container justify-items-center m-8 mx-auto w-3/4">
      <div className="singleCategoryTitle">
        <h1 className="m-7 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          {selectedCategory.name} Tutorials:
        </h1>
      </div>
      <CategoryCard selectedCategoryProp={selectedCategory.name} />
    </div>
  );
}
