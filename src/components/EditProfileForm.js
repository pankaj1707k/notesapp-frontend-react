import { useState } from "react";
import FormInputGroup from "./FormInputGroup";

const EditProfileForm = (props) => {
  var [username, setUsername] = useState(props.data.username);
  var [email, setEmail] = useState(props.data.email);
  var [firstName, setFirstName] = useState(props.data.firstName);
  var [lastName, setLastName] = useState(props.data.lastName);
  var [phone, setPhone] = useState(props.data.phone);
  var [profileImg, setProfileImg] = useState("");

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

  const handleProfileImg = (e) => {
    setProfileImg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let profile = {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      profile_img: profileImg !== "" ? profileImg : props.data.profile_img,
    };
    props.handleUpdate(profile);
    setProfileImg("");
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
        value={firstName}
        onChange={handleFirstName}
      />
      <FormInputGroup
        icon="bi bi-card-heading"
        type="text"
        name="Last name"
        value={lastName}
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
        value={profileImg}
        onChange={handleProfileImg}
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
