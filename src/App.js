import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const App = () => {
  var [auth, setAuth] = useState(localStorage.getItem("authtoken") != null);

  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup setAuth={setAuth} />} />
        <Route path="login" element={<Login setAuth={setAuth} />} />
        <Route path="notes" element={<Notes />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
