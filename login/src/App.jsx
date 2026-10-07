import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 const handleLogin = () => {
  const usernamePattern = /^[A-Za-z][A-Za-z0-9]*$/;

  if (username === "" || password === "") {
    setMessage("Please enter username and password");
  } else if (!usernamePattern.test(username)) {
    setMessage("Invalid username. Username must start with a letter");
  } else {
    setMessage("Login Successful");
  }
};

  return (
    <div>
      <h1>Login Form</h1>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleLogin}>Login</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;