import React from "react";
import FormInputGroup from "../components/FormInputGroup";

const Signup = () => {
  return (
    <main className="container d-flex flex-column align-items-center">
      <h1 className="h1 mt-5">New User</h1>
      <form className="mt-3 w-75">
        <FormInputGroup icon="bi bi-at fs-3" type="text" name="Username" />
        <FormInputGroup icon="bi bi-envelope fs-3" type="email" name="Email" />
        <FormInputGroup icon="bi bi-key fs-3" type="password" name="Password" />
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Register
        </button>
      </form>
    </main>
  );
};

export default Signup;
