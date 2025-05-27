import { categoriesArray } from "@/app/assets/categories";
import { Categories } from "@/app/assets/types";
// import TransitionCards from "@/components/transitionCards";
import CategoryCard from "@/components/categoryCard";


interface PageProps {
  params: {
    id: string;
  };
}
export default async function SingleCategory({ params }:PageProps) {
  const { id } = await params; 
  const idToInt:number = parseInt(id); 
  
  const selectedCategory: Categories = categoriesArray.filter((filterCategories)=> filterCategories.id == idToInt)[0];

  return (
    <div className="container justify-items-center m-8 mx-auto w-3/4">
      <div className="singleCategoryTitle">
        <h1
        className=" m-7 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {selectedCategory.name} 
        Tutorials:
        </h1>
      </div>
      <CategoryCard  selectedCategoryProp={selectedCategory.name}/>
    </div>
  );
}
