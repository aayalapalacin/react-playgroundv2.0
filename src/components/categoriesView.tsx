import React from 'react';
import "../app/styles/categoryView.css";
import { categoriesArray } from '@/app/assets/categories';

const CategoriesView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categoriesArray.length > 0 ? (
        categoriesArray.map((category, categoryIndex) => (
          <div key={categoryIndex} className="text-center">
            <h1 className="text-lg font-semibold mb-2">{category.name}</h1>
            <div className="w-full  overflow-hidden rounded-xl shadow-lg category-img-container">
              <img
                src={category.icon}
                alt={category.name}
                className="w-full h-full object-cover category-img "
              />
            </div>
            {category.description && (
              <p className="text-sm text-gray-600 mt-2">{category.description}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No categories available</p>
      )}
    </div>
  );
};

export default CategoriesView;
