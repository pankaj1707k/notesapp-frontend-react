import { useState } from "react";
import FormInputGroup from "../components/FormInputGroup";

const Signup = () => {
  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    // API call to register user
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
