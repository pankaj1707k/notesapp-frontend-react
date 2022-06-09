import React from "react";
import EditProfileForm from "./EditProfileForm";

const EditProfileModal = () => {
  return (
    <div
      className="modal fade"
      id="editProfileModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Profile</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <EditProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
