import { useState } from "react";

const AddNoteModal = (props) => {
  var [noteContent, setNoteContent] = useState("");
  var [notebook, setNotebook] = useState("");

  const handleNoteContent = (e) => {
    setNoteContent(e.target.value);
  };

  const handleNotebook = (e) => {
    setNotebook(e.target.value);
  };

  const handleSubmit = (e) => {
    let id = Math.floor(Math.random() * 100); // remove if calling API
    let newNote = { id: id, content: noteContent, notebook: notebook };
    props.handleCreate(newNote);
  };

  return (
    <div
      className="modal fade"
      id="newNoteModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Note</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              placeholder="Write something..."
              value={noteContent}
              onChange={handleNoteContent}
            />
            <select
              className="form-select mt-3"
              value={notebook}
              onChange={handleNotebook}
            >
              <option value="">Select notebook</option>
              {props.notebooks.map((notebook) => (
                <option key={notebook.name} value={notebook.name}>
                  {notebook.name}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
