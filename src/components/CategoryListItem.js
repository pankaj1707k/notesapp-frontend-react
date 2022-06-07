import React from "react";

const CategoryListItem = () => {
  return (
    <li className="fs-5 d-flex justify-content-between mb-1">
      <p className="mb-0">Category name</p>
      <i class="bi bi-trash3-fill cursor-pointer text-danger"></i>
    </li>
  );
};

export default CategoryListItem;
