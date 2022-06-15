import { useState } from "react";
import AddNotebookModal from "../components/AddNotebookModal";
import AddNoteModal from "../components/AddNoteModal";
import NotebookList from "../components/NotebookList";
import NotesList from "../components/NotesList";

const Notes = () => {
  var dummyNotes = [
    {
      id: 1,
      content: "Sample note 1",
      notebook: "notebook 1",
    },
    {
      id: 2,
      content: "Sample note 2",
      notebook: "notebook 2",
    },
    {
      id: 3,
      content: "Sample note 3",
      notebook: "notebook 3",
    },
  ];

  var dummyNotebooks = [
    { name: "notebook 1" },
    { name: "notebook 2" },
    { name: "notebook 3" },
  ];

  var [notes, setNotes] = useState(dummyNotes);
  var [notebooks, setNotebooks] = useState(dummyNotebooks);

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

  const deleteNotebook = (name) => {
    setNotebooks(notebooks.filter((nb) => nb.name !== name));
  };

  const addNotebook = (notebook) => {
    setNotebooks([...notebooks, notebook]);
  };

  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <button
            className="btn btn-outline-primary col-1 ms-3 w-auto d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#notebooklist"
            aria-controls="notebooklist"
          >
            <i className="bi bi-arrow-bar-right"></i>
          </button>
          <div
            className="offcanvas-md offcanvas-start col-md-4 px-4 py-2 border border-primary border-top-0 border-bottom-0 border-start-0"
            tabIndex="-1"
            id="notebooklist"
          >
            <div className="offcanvas-body">
              <div className="w-100">
                <h4 className="d-flex justify-content-between">
                  <span>Notebooks</span>
                  <i
                    className="bi bi-plus-lg cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#notebookModal"
                  ></i>
                </h4>
                <NotebookList
                  notebooks={notebooks}
                  handleDelete={deleteNotebook}
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
              notebooks={notebooks}
            />
          </div>
        </div>
      </main>
      <AddNoteModal notebooks={notebooks} handleCreate={addNote} />
      <AddNotebookModal handleCreate={addNotebook} />
    </>
  );
};

export default Notes;
