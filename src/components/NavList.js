import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const NavList = (props) => {
  var navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      const url = BASE_URL + "/users/logout/";
      const headers = {
        Authorization: `Token ${localStorage.getItem("authtoken")}`,
      };
      const response = await axios.get(url, { headers });
      console.log(response);
      localStorage.removeItem("authtoken");
      props.setAuth(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderUnauthenticated = () => {
    return (
      <>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="/signup">
            Sign up
          </Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </>
    );
  };

  const renderAuthenticated = () => {
    return (
      <>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="/notes">
            Notes
          </Link>
        </li>
        <li className="nav-item fs-5">
          <button
            className="nav-link bg-transparent border-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="/profile">
            <i className="bi bi-person-circle"></i>
          </Link>
        </li>
      </>
    );
  };

  return (
    <ul className="navbar-nav">
      {props.auth ? renderAuthenticated() : renderUnauthenticated()}
    </ul>
  );
};

export default NavList;
