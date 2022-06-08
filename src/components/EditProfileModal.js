import React from "react";
import EditProfileForm from "./EditProfileForm";

const EditProfileModal = () => {
  return (
    <div
      class="modal fade"
      id="editProfileModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Profile</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <EditProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
