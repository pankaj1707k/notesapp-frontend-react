import React from "react";
import DefaultProfilePic from "../assets/blank-profile-picture.png";
import EditProfileModal from "../components/EditProfileModal";
import ChangePasswordModal from "../components/ChangePasswordModal";

const Profile = () => {
  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <div className="col mx-auto col-sm-4 mb-4">
            <img
              src={DefaultProfilePic}
              alt="blank-profile-picture"
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-1"></div>
          <div className="col col-sm-7 ps-4 ps-sm-0 text-condensed-3">
            <p className="fs-3 mb-2 text-condensed-2">Full Name</p>
            <p className="fs-5 mb-2">
              <i class="bi bi-at"></i>
              <span className="ms-3">Username</span>
            </p>
            <p className="fs-5 mb-2">
              <i class="bi bi-envelope"></i>
              <span className="ms-3">Email</span>
            </p>
            <p className="fs-5 mb-2">
              <i class="bi bi-telephone"></i>
              <span className="ms-3">Phone Number</span>
            </p>
          </div>
        </div>
        <div className="row mt-3 mb-4 g-3">
          <div className="col-12 col-sm-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              Edit Profile
            </button>
          </div>
          <div className="col-12 col-sm-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#changePasswordModal"
            >
              Change Password
            </button>
          </div>
          <div className="col-12 col-sm-4">
            <button type="button" className="btn btn-danger w-100">
              Delete Account
            </button>
          </div>
        </div>
      </main>
      <EditProfileModal />
      <ChangePasswordModal />
    </>
  );
};

export default Profile;
