import { useState } from "react";
import DefaultProfilePic from "../assets/blank-profile-picture.png";
import ChangePasswordModal from "../components/ChangePasswordModal";
import EditProfileModal from "../components/EditProfileModal";

const Profile = () => {
  const profileData = {
    id: 1,
    name: "FullName",
    username: "SomeUsername",
    email: "user@test.com",
    phone: "1023456789",
    profile_img: DefaultProfilePic,
  };

  var [profile, setProfile] = useState(profileData);

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <div className="col mx-auto col-sm-4 mb-4">
            <img
              src={profile.profile_img}
              alt="blank-profile"
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-1"></div>
          <div className="col col-sm-7 ps-4 ps-sm-0 text-condensed-3">
            <p className="fs-3 mb-2 text-condensed-2">{profile.name}</p>
            <p className="fs-5 mb-2">
              <i className="bi bi-at"></i>
              <span className="ms-3">{profile.username}</span>
            </p>
            <p className="fs-5 mb-2">
              <i className="bi bi-envelope"></i>
              <span className="ms-3">{profile.email}</span>
            </p>
            <p className="fs-5 mb-2">
              <i className="bi bi-telephone"></i>
              <span className="ms-3">{profile.phone}</span>
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
      <EditProfileModal data={profile} handleUpdate={updateProfile} />
      <ChangePasswordModal />
    </>
  );
};

export default Profile;
