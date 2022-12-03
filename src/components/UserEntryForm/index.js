import { useState } from "react";

import { getUser } from "../../fetch/user";

const UserEntryForm = ({ pathname }) => {
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
    }

    setSubmitted(false);
    setError(response.message);
  };
  return (
    <form onSubmit={handleSubmit}>
      {!forgotUsername && (
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
      )}

      {pathname === "/login" && !forgotUsername && (
        <button onClick={() => setForgotUsername(true)}>forgot username</button>
      )}

      {(pathname === "/signup" || forgotUsername) && (
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      )}

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

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
