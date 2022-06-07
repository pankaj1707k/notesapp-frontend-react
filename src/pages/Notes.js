import React from "react";
import CategoryList from "../components/CategoryList";
import NotesList from "../components/NotesList";
import AddNoteModal from "../components/AddNoteModal";
import UpdateDeleteNoteModal from "../components/UpdateDeleteNoteModal";
import AddCategoryModal from "../components/AddCategoryModal";

const Notes = () => {
  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <button
            className="btn btn-outline-primary col-1 ms-3 w-auto d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#categorylist"
            aria-controls="categorylist"
          >
            <i class="bi bi-arrow-bar-right"></i>
          </button>
          <div
            className="offcanvas-md offcanvas-start col-md-4 px-4 py-2 border border-primary border-top-0 border-bottom-0 border-start-0"
            tabIndex="-1"
            id="categorylist"
          >
            <div className="offcanvas-body">
              <div className="w-100">
                <h4 className="d-flex justify-content-between">
                  <span>Categories</span>
                  <i
                    class="bi bi-plus-lg cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#categoryModal"
                  ></i>
                </h4>
                <CategoryList />
              </div>
            </div>
          </div>
          <div className="col-11 col-md-8 px-3 py-2">
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control fs-5"
                placeholder="Search"
              />
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#newNoteModal"
              >
                New
              </button>
            </div>
            <NotesList />
          </div>
        </div>
      </main>
      <AddNoteModal />
      <UpdateDeleteNoteModal />
      <AddCategoryModal />
    </>
  );
};

export default Notes;
