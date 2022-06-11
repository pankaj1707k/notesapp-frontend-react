import React, { useState } from "react";
import CategoryList from "../components/CategoryList";
import NotesList from "../components/NotesList";
import AddNoteModal from "../components/AddNoteModal";
import AddCategoryModal from "../components/AddCategoryModal";

const Notes = () => {
  var dummyNotes = [
    {
      id: 1,
      content: "Sample note 1",
      category: "category 1",
    },
    {
      id: 2,
      content: "Sample note 2",
      category: "category 2",
    },
    {
      id: 3,
      content: "Sample note 3",
      category: "category 3",
    },
  ];

  var dummyCategories = [
    { name: "category 1" },
    { name: "category 2" },
    { name: "category 3" },
  ];

  var [notes, setNotes] = useState(dummyNotes);
  var [categories, setCategories] = useState(dummyCategories);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (updatedNote) => {
    let notelist = notes.filter((note) => note.id !== updatedNote.id);
    notelist = [updatedNote, ...notelist];
    setNotes(notelist);
  };

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const deleteCategory = (name) => {
    setCategories(categories.filter((cat) => cat.name !== name));
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

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
            <i className="bi bi-arrow-bar-right"></i>
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
                    className="bi bi-plus-lg cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#categoryModal"
                  ></i>
                </h4>
                <CategoryList
                  categories={categories}
                  handleDelete={deleteCategory}
                />
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
            <NotesList
              notes={notes}
              handleDelete={deleteNote}
              handleUpdate={updateNote}
              categories={categories}
            />
          </div>
        </div>
      </main>
      <AddNoteModal categories={categories} handleCreate={addNote} />
      <AddCategoryModal handleCreate={addCategory} />
    </>
  );
};

export default Notes;
