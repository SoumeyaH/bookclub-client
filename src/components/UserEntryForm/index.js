import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../fetch/user";
import ErrorMessage from "../ErrorMessage";

import "./styles.css";

const UserEntryForm = ({ pathname }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStyle, setErrorStyle] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [genericError, setGenericError] = useState("");
  const [forgotUsername, setForgotUsername] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    // TODO error handling - dont hit server if username || email empty or password empty
    // signup has user validation errors if fields empty
    // TODO can users have empty spaces in username/password?

    const body = JSON.stringify({
      username,
      email,
      password,
    });

    const response = await getUser(pathname, body);

    if (response.username) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: response.username,
          token: response.token,
          userId: response.userId,
        })
      );

      navigate("/dashboard");
      window.location.reload();
      setSubmitted(true);
    }

    if (response.errors) {
      setUsernameError(response.errors.username);
      setEmailError(response.errors.email);
      setPasswordError(response.errors.password);
      setGenericError(response.errors.generic);
      setSubmitted(false);
      setErrorStyle(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form-container ${errorStyle ? "form-error" : ""}`}
    >
      {!!genericError && <ErrorMessage message={genericError} />}

      {!forgotUsername && (
        <div className="input-container">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError("");
              setErrorStyle(false);
            }}
            className={`inputBox ${username ? "valid-input" : ""}`}
          />

          <label htmlFor="username" className="label required">
            Username
          </label>
          <span className="line"></span>
        </div>
      )}

      {!!usernameError && <ErrorMessage message={usernameError} />}

      {(pathname === "/signup" || forgotUsername) && (
        <div className="input-container">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              setErrorStyle(false);
            }}
            className={`inputBox ${email ? "valid-input" : ""}`}
          />

          <label htmlFor="email" className="label required">
            Email
          </label>
          <span className="line"></span>
        </div>
      )}

      {!!emailError && <ErrorMessage message={emailError} />}

      <div className="input-container">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
            setErrorStyle(false);
          }}
          className={`inputBox ${password ? "valid-input" : ""}`}
        />
        <label htmlFor="password" className="label required">
          Password
        </label>
        <span className="line"></span>
      </div>

      {!!passwordError && <ErrorMessage message={passwordError} />}

      <div className="btn-container">
        <input
          type="submit"
          value="submit"
          className={`${submitted ? "disabledBtn" : "formBtn"}`}
          disabled={submitted}
        />

        {pathname === "/login" && !forgotUsername && (
          <button
            className="formBtn"
            onClick={() => {
              setForgotUsername(true);
              setUsername("");
            }}
          >
            forgot username?
          </button>
        )}
      </div>
    </form>
  );
};

export default UserEntryForm;
