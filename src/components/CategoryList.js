import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  return (
    <ul className="list-no-bullets px-1 mt-3">
      <CategoryListItem />
      <CategoryListItem />
    </ul>
  );
};

export default CategoryList;
