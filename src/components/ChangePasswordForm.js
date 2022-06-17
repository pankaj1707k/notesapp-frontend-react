import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants";
import FormInputGroup from "./FormInputGroup";

const ChangePasswordForm = () => {
  const headers = {
    Authorization: `Token ${localStorage.getItem("authtoken")}`,
  };

  var [oldPassword, setOldPassword] = useState("");
  var [newPassword, setNewPassword] = useState("");
  var [confirmPassword, setConfirmPassword] = useState("");

  const handleOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build data
    let data = new FormData();
    data.append("old_password", oldPassword);
    data.append("new_password", newPassword);
    data.append("new_password_confirm", confirmPassword);

    try {
      const url = BASE_URL + "/users/update/password/";
      await axios.put(url, data, { headers });
    } catch (error) {
      console.log(error);
    }
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputGroup
        icon="bi bi-key"
        type="password"
        name="Old Password"
        value={oldPassword}
        onChange={handleOldPassword}
      />
      <FormInputGroup
        icon="bi bi-shield-lock"
        type="password"
        name="New Password"
        value={newPassword}
        onChange={handleNewPassword}
      />
      <FormInputGroup
        icon="bi bi-shield-lock-fill"
        type="password"
        name="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
      <button
        type="submit"
        className="btn btn-primary w-100"
        data-bs-dismiss="modal"
      >
        Update
      </button>
    </form>
  );
};

export default ChangePasswordForm;
