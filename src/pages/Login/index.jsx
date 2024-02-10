import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { login, register } from "../../services/auth";

const Login = ({ handleUserInteraction }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await login(user);
    if (newUser) {
      localStorage.setItem("token", newUser.token);
      handleUserInteraction();
    }
    console.log("user", newUser);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <form>
          <h4>Login</h4>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Remember me</label>
          </div>
          <button
            type="submit"
            className="submit-btn"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <label>
          Don't have an account? <Link to="/signup">Signup</Link>
        </label>
      </div>
    </div>
  );
};

export default Login;
