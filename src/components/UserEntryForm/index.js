import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../fetch/user";

import "./styles.css";

const UserEntryForm = ({ pathname }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgotUsername, setForgotUsername] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

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
    } else {
      setSubmitted(false);
      setError(response.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`form-container ${error ? "form-error" : ""}`}
    >
      <div className="something">
        {!forgotUsername && (
          <div className="input-container">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              className={`inputBox ${username ? "valid-input" : ""}`}
            />

            <label htmlFor="username" className="label required">
              Username
            </label>
            <span className="line"></span>
          </div>
        )}

        {pathname === "/login" && !forgotUsername && (
          <button onClick={() => setForgotUsername(true)}>
            forgot username
          </button>
        )}
      </div>

      {(pathname === "/signup" || forgotUsername) && (
        <div className="input-container">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className={`inputBox ${email ? "valid-input" : ""}`}
          />

          <label htmlFor="email" className="label required">
            Email
          </label>
          <span className="line"></span>
        </div>
      )}

      <div className="input-container">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className={`inputBox ${password ? "valid-input" : ""}`}
        />
        <label htmlFor="password" className="label required">
          Password
        </label>
        <span className="line"></span>
      </div>

      {error && <p>{error}</p>}

      <input
        type="submit"
        value="submit"
        className="submit"
        disabled={submitted}
      />
    </form>
  );
};

export default UserEntryForm;
