import { categoriesArray } from "@/app/assets/categories";
import { Categories } from "@/app/assets/types";
import TransitionCards from "@/components/transitionCards";
import CategoryCard from "@/components/categoryCard";

export default function SingleCategory({ params }: { params: { id: string } }) {
  const { id } = params; 
  const idToInt:number = parseInt(id); 
  
  const selectedCategory: Categories = categoriesArray.filter((filterCategories)=> filterCategories.id == idToInt)[0];

console.log(selectedCategory,"selectd cat")
console.log(idToInt,"id int",typeof idToInt)
  return (
    <div className="container justify-items-center m-8 mx-auto w-3/4">
      <CategoryCard  selectedCategoryProp={selectedCategory.name}/>
    </div>
  );
}
