import { useEffect, useState } from "react";
import { FBInit } from "../../components";
import "./styles.css";

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(
    !!localStorage.getItem("fbAccessToken")
  );

  console.log("ssa", localStorage.getItem("fbAccessToken"));
  async function handleFb(status) {
    if (status === true) setIsConnected(true);
    else setIsConnected(false);
  }

  useEffect(() => {
    if (localStorage.getItem("fbAccessToken")) setIsConnected(true);
    else setIsConnected(false);
  }, []);

  return (
    <div className="login-container">
      <div className="form-container">
        <h4>Facebook Page Integration</h4>
        {localStorage.getItem("role") == "client" && (
          <FBInit isConnected={isConnected} handleFb={handleFb} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
