import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="notes" element={<Notes />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
