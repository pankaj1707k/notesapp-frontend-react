import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInputGroup from "../components/FormInputGroup";
import { BASE_URL } from "../constants";

const Signup = (props) => {
  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = BASE_URL + "/users/register/";
      const response = await axios.post(url, { username, email, password });
      localStorage.setItem("authtoken", response.data.token);
      props.setAuth(true);
      navigate("/notes");
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <main className="container d-flex flex-column align-items-center">
      <h1 className="h1 mt-5">New User</h1>
      <form className="mt-3 w-75" onSubmit={handleSubmit}>
        <FormInputGroup
          icon="bi bi-at fs-3"
          type="text"
          name="Username"
          value={username}
          onChange={handleUsername}
        />
        <FormInputGroup
          icon="bi bi-envelope fs-3"
          type="email"
          name="Email"
          value={email}
          onChange={handleEmail}
        />
        <FormInputGroup
          icon="bi bi-key fs-3"
          type="password"
          name="Password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Register
        </button>
      </form>
    </main>
  );
};

export default Signup;
