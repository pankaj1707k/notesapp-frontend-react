import axios from "axios";
import { useEffect, useState } from "react";
import AddNotebookModal from "../components/AddNotebookModal";
import AddNoteModal from "../components/AddNoteModal";
import NotebookList from "../components/NotebookList";
import NotesList from "../components/NotesList";
import { BASE_URL } from "../constants";

const Notes = () => {
  const headers = {
    Authorization: `Token ${localStorage.getItem("authtoken")}`,
  };

  var [notebooks, setNotebooks] = useState([]);

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

  useEffect(() => {
    const getNotebooks = async () => {
      try {
        const url = BASE_URL + "/notes/notebooks/";
        const response = await axios.get(url, { headers });
        setNotebooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotebooks();
  });

  var [notes, setNotes] = useState(dummyNotes);

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

  const deleteNotebook = async (id) => {
    try {
      const url = BASE_URL + `/notes/notebooks/${id}/`;
      await axios.delete(url, { headers });
      setNotebooks(notebooks.filter((nb) => nb.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addNotebook = async (notebook) => {
    try {
      const url = BASE_URL + "/notes/notebooks/";
      await axios.post(url, notebook, { headers });
      setNotebooks([...notebooks, notebook]);
    } catch (error) {
      console.log(error);
    }
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
