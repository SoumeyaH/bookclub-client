import "./styles.css";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="list-item">iconlinkhome</div>
      <ul className="list-items-container">
        <li className="list-item">other item</li>
        <li className="list-item">
          USERNAME &#x25BE;
          <ul className="dropdown">
            <li className="list-item">logout button</li>
            <li className="list-item delete-user">delete account</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
