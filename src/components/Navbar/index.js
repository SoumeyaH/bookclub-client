import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { useUserContext } from "../../contexts/UserContext";

import LogoutBtn from "../LogoutBtn";
import SearchBar from "../SearchBar";

import "./styles.css";
// TODO covering pages content
const NavBar = () => {
  const { user } = useUserContext();

  return (
    <nav className="navbar-container">
      <Link to="/">
        <FaHome className="home-icon" />
      </Link>

      {user.token && <SearchBar />}

      {!user.token && (
        <Link to="/login" className="login-link">
          Login
        </Link>
      )}

      {user.token && (
        <ul>
          <li className="link-item">
            {user.username} &#x25BE;
            <ul className="dropdown">
              <li className="link-item">
                <Link to="/dashboard">dashboard</Link>
              </li>
              <li>
                <LogoutBtn />
              </li>
              <li className="link-item delete-user">delete account</li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
