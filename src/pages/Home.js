import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <h1 className="display-4 mt-5">
        <strong>Create and access your sticky notes anywhere</strong>
      </h1>
      <Link to="/" className="btn btn-lg btn-primary mt-3">
        Get Started
      </Link>
    </main>
  );
};

export default Home;
