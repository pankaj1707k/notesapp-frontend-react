import React, { useState } from "react";

const UpdateDeleteNoteModal = (props) => {
  var [noteContent, setNoteContent] = useState(props.note.content);

  const handleNoteContent = (e) => {
    setNoteContent(e.target.value);
  };

  const handleUpdate = (e) => {
    console.log(noteContent);
    // API call to update data
  };

  const handleDelete = (e) => {
    console.log(noteContent);
    // API call to delete note
  };

  return (
    <div
      className="modal fade"
      id={"note" + props.note.id}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Note Details</h5>
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
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDeleteNoteModal;
