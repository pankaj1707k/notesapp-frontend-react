import React from "react";
import FormInputGroup from "./FormInputGroup";

const EditProfileForm = () => {
  return (
    <form>
      <FormInputGroup icon="bi bi-at" type="text" name="Username" />
      <FormInputGroup icon="bi bi-envelope" type="text" name="Email" />
      <FormInputGroup icon="bi bi-telephone" type="text" name="Phone" />
      <FormInputGroup
        icon="bi bi-card-image"
        type="file"
        name="Profile Picture"
      />
      <button type="submit" className="btn btn-primary w-100">
        Update
      </button>
    </form>
  );
};

export default EditProfileForm;
