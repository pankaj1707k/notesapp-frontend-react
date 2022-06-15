import { useState } from "react";
import FormInputGroup from "./FormInputGroup";

const ChangePasswordForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPassword);
    // API call to update password
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
      <button type="submit" className="btn btn-primary w-100">
        Update
      </button>
    </form>
  );
};

export default ChangePasswordForm;
