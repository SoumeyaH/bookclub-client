import UserEntryForm from "../../components/UserEntryForm";

import { Link } from "react-router-dom";

import "./styles.css";

const LoginPage = () => {
  return (
    <div>
      <h2 className="page-con">LoginPage</h2>
      <UserEntryForm pathname={"/login"} />
      <p>
        Don't have an account sign up <Link to="/signup">here</Link>
      </p>
    </div>
  );
};

export default LoginPage;

// todo error navbar hiding text

// style inputs and buttons in index css
//
// style word link to signup here
