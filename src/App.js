import {
  BrowserRouter as AuthRouter,
  BrowserRouter as DashboardRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import { Dashboard, FbPages, Login, Messenger, Signup } from "./pages";
import { Sidebar } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { getMe, logout } from "./services/auth";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  async function handleUserInteraction() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = await getMe(token);
      if (user) {
        localStorage.setItem("role", user.role);
        if (user.fbUserAccessToken)
          localStorage.setItem("fbAccessToken", user.fbUserAccessToken);
        if (user.role === "client") {
          localStorage.setItem("clientId", user.user.roleData.client._id);
        } else if (user.role === "agent") {
          localStorage.setItem("agentId", user.user.roleData.agent._id);
          localStorage.setItem("clientId", user.user.roleData.agent.client);
        }
        setUser(user);
      }
    } else {
      navigate("/login");
    }
  }

  async function handleLogin() {
    await handleUserInteraction();
    navigate("/dashboard");
  }

  async function handleLogout() {
    const lt = await logout();
    if (lt) {
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("agentId");
      localStorage.removeItem("clientId");
      localStorage.removeItem("fbAccessToken");
      localStorage.removeItem("role");
      navigate("/login");
    }
  }

  useEffect(() => {
    handleUserInteraction();
  }, []);

  return (
    <div>
      {!user && (
        <Routes>
          <Route
            path="/login"
            element={<Login handleUserInteraction={handleLogin} />}
          />
          <Route
            path="/signup"
            element={<Signup handleUserInteraction={handleLogin} />}
          />
        </Routes>
      )}
      {user && (
        <Sidebar handleLogout={handleLogout}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/fb-pages" element={<FbPages />} />
          </Routes>
        </Sidebar>
      )}
    </div>
  );
}

export default App;
