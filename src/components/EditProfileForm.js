import { useState } from "react";
import FormInputGroup from "./FormInputGroup";

const EditProfileForm = (props) => {
  var [username, setUsername] = useState(props.data.username);
  var [email, setEmail] = useState(props.data.email);
  var [first_name, setFirstName] = useState(props.data.first_name);
  var [last_name, setLastName] = useState(props.data.last_name);
  var [phone, setPhone] = useState(props.data.profile.phone);
  var [avatar, setAvatar] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let profile = new FormData();
    profile.append("username", username);
    profile.append("email", email);
    profile.append("first_name", first_name);
    profile.append("last_name", last_name);
    profile.append("profile.phone", phone);
    profile.append("profile.avatar", avatar);
    props.handleUpdate(profile);
  };

  return (
    <form onSubmit={handleSubmit} spellCheck="false">
      <FormInputGroup
        icon="bi bi-at"
        type="text"
        name="Username"
        value={username}
        onChange={handleUsername}
      />
      <FormInputGroup
        icon="bi bi-envelope"
        type="email"
        name="Email"
        value={email}
        onChange={handleEmail}
      />
      <FormInputGroup
        icon="bi bi-card-heading"
        type="text"
        name="First name"
        value={first_name}
        onChange={handleFirstName}
      />
      <FormInputGroup
        icon="bi bi-card-heading"
        type="text"
        name="Last name"
        value={last_name}
        onChange={handleLastName}
      />
      <FormInputGroup
        icon="bi bi-telephone"
        type="text"
        name="Phone"
        value={phone}
        onChange={handlePhone}
      />
      <FormInputGroup
        icon="bi bi-card-image"
        type="file"
        name="ProfilePicture"
        onChange={handleAvatar}
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

export default EditProfileForm;
