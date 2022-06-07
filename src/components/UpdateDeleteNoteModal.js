import React from "react";

const UpdateDeleteNoteModal = () => {
  return (
    <div class="modal fade" id="noteModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Note Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <textarea
              className="form-control"
              placeholder="Write something..."
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Update
            </button>
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDeleteNoteModal;
