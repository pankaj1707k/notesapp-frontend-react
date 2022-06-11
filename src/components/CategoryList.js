import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {
  var listItems = props.categories.map((category) => (
    <CategoryListItem
      key={category.name}
      category={category}
      handleDelete={props.handleDelete}
    />
  ));
  return <ul className="list-no-bullets px-1 mt-3">{listItems}</ul>;
};

export default CategoryList;
