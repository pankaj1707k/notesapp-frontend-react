import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";
import EditProfileModal from "../components/EditProfileModal";
import { BASE_URL } from "../constants";

const Profile = (props) => {
  const headers = {
    Authorization: `Token ${localStorage.getItem("authtoken")}`,
  };

  const initial = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    profile: {
      phone: "",
      avatar: "",
    },
  };

  var [profile, setProfile] = useState(initial);

  useEffect(() => {
    const headers = {
      Authorization: `Token ${localStorage.getItem("authtoken")}`,
    };

    const getUserData = async () => {
      try {
        const url = BASE_URL + "/users/retrieve/";
        const response = await axios.get(url, { headers });
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  const updateProfile = async (updatedProfile) => {
    try {
      const url = BASE_URL + "/users/update/";
      const response = await axios.patch(url, updatedProfile, { headers });
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  var navigate = useNavigate();

  const deleteAccount = async () => {
    try {
      const url = BASE_URL + "/users/delete/";
      await axios.delete(url, { headers });
      navigate("/");
      localStorage.removeItem("authtoken");
      props.setAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <div className="col mx-auto col-sm-4 mb-4">
            <img
              src={profile.profile.avatar}
              alt="blank-profile"
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-1"></div>
          <div className="col col-sm-7 ps-4 ps-sm-0 text-condensed-3">
            <p className="fs-3 mb-2 text-condensed-2">
              {profile.first_name + " " + profile.last_name}
            </p>
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
              <span className="ms-3">{profile.profile.phone}</span>
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
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={deleteAccount}
            >
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
