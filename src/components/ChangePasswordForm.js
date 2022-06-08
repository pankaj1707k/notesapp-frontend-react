import React from "react";
import FormInputGroup from "./FormInputGroup";

const ChangePasswordForm = () => {
  return (
    <form>
      <FormInputGroup icon="bi bi-key" type="password" name="Old Password" />
      <FormInputGroup
        icon="bi bi-shield-lock"
        type="password"
        name="New Password"
      />
      <FormInputGroup
        icon="bi bi-shield-lock-fill"
        type="password"
        name="Confirm Password"
      />
      <button type="submit" className="btn btn-primary w-100">
        Update
      </button>
    </form>
  );
};

export default ChangePasswordForm;
