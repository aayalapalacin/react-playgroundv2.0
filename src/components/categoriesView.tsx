import React from "react";
import "../app/styles/categoryView.css";
import { categoriesArray } from "@/app/assets/categories";
import Link from "next/link";
import Image from "next/image";

const CategoriesView = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {categoriesArray.length > 0 ? (
          categoriesArray.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center text-black">
              <h1 className="text-lg font-semibold mb-2">{category.name}</h1>
              <div
                className="w-full overflow-hidden rounded-xl shadow-lg category-img-container"
                style={{
                  display: "grid",
                  gridGap: "8px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
                }}
              >
                <div style={{ position: "relative" }} className="h-64">
                  <Link href={`/singleCat/${category.id}`}>
                    <Image
                      alt={category.name}
                      src={category.icon}
                      fill
                      sizes="(min-width: 808px) 50vw, 50vw"
                      style={{
                        objectFit: "cover", // cover, contain, none
                      }}
                      className="category-img"
                    />
                  </Link>
                </div>
              </div>
              {category.description && (
                <p className="text-sm mt-2">{category.description}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesView;
