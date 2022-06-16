import axios from "axios";
import { useState } from "react";
import FormInputGroup from "../components/FormInputGroup";
import { BASE_URL } from "../constants";

const Login = () => {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = BASE_URL + "/users/login/";
      const response = await axios.post(url, { username, password });
      localStorage.setItem("authtoken", response.data.token);
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <main className="container d-flex flex-column align-items-center">
      <h1 className="h1 mt-5">Login to your account</h1>
      <form className="mt-3 w-75" onSubmit={handleSubmit}>
        <FormInputGroup
          icon="bi bi-at fs-3"
          type="text"
          name="Username"
          value={username}
          onChange={handleUsername}
        />
        <FormInputGroup
          icon="bi bi-key fs-3"
          type="password"
          name="Password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
