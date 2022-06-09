import React, { useState } from "react";

const AddNoteModal = () => {
  var [noteContent, setNoteContent] = useState("");

  const handleNoteContent = (e) => {
    setNoteContent(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(noteContent);
    // API call to create new note
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
