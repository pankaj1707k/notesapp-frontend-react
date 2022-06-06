import React from "react";
import FormInputGroup from "../components/FormInputGroup";

const Login = () => {
  return (
    <main className="container d-flex flex-column align-items-center">
      <h1 className="h1 mt-5">Login to your account</h1>
      <form className="mt-3 w-75">
        <FormInputGroup icon="bi bi-at fs-3" type="text" name="Username" />
        <FormInputGroup icon="bi bi-key fs-3" type="password" name="Password" />
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
