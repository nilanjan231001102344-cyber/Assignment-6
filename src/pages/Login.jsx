import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          Task<span>Flow</span>
        </div>

        <p className="login-label">TASK MANAGEMENT</p>

        <h1>Welcome Back</h1>

        <p className="login-description">
          Sign in to manage your tasks.
        </p>

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />

          <button type="submit" className="login-button">
            Sign In →
          </button>
        </form>

        <small>
          Demo: enter any username and password
        </small>
      </div>
    </div>
  );
}

export default Login;