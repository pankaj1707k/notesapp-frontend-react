import React from "react";
import CategoryList from "../components/CategoryList";

const Notes = () => {
  return (
    <main className="container">
      <div className="row mt-4">
        <div className="col-4 px-4">
          <h4 className="d-flex justify-content-between">
            <span>Categories</span>
            <i class="bi bi-plus-lg cursor-pointer"></i>
          </h4>
          <CategoryList />
        </div>
        <div className="col-8">Notes list section</div>
      </div>
    </main>
  );
};

export default Notes;
