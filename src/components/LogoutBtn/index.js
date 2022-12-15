import { useNavigate } from "react-router-dom";

import "./styles.css";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify({}));
    navigate("/");
    window.location.reload();
  };
  return (
    <button onClick={handleClick} className="logoutBtn">
      Logout
    </button>
  );
};

export default LogoutBtn;
