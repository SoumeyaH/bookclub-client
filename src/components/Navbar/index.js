import { Link } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";

import "./styles.css";

const NavBar = () => {
  const { user } = useUserContext();

  return (
    <nav className="navbar-container">
      <Link className="link-item" to="/">
        iconhome
      </Link>

      <ul className="link-items-container">
        <li className="link-item">
          <Link to="/dashboard">dashboard</Link>
        </li>

        {!user.token && (
          <li className="link-item">
            <Link to="/login">Login</Link>
          </li>
        )}

        {user.token && (
          <li className="link-item">
            {user.username} &#x25BE;
            <ul className="dropdown">
              <li className="link-item">logout button</li>
              <li className="link-item delete-user">delete account</li>
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
