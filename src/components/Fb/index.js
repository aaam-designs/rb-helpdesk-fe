import { useEffect } from "react";
import {
  fbLogin,
  fbLogout,
  getFacebookLoginStatus,
  initFacebookSdk,
} from "./services";
import "./styles.css";
import { connectToFb, disconnectToFb } from "../../services/messenger";

export default function FBInit({ isConnected, handleFb }) {
  console.log("iuiu", isConnected);
  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log(response);
        }
      });
    });
  }, []);
  function login() {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      if (response.status === "connected") {
        localStorage.setItem(
          "fbAccessToken",
          response.authResponse.accessToken
        );
        const token = localStorage.getItem("token");
        connectToFb(
          {
            fbUserId: response.authResponse.userID,
            fbAccessToken: response.authResponse.accessToken,
          },
          token
        );
        handleFb(true);
        console.log("Person is connected");
      } else {
        // something
      }
    });
  }

  function logout() {
    fbLogout().then((response) => {
      localStorage.removeItem("fbAccessToken");
      disconnectToFb({});
      handleFb(false);
    });
    localStorage.removeItem("fbAccessToken");
    disconnectToFb({});
    handleFb(false);
  }

  function getStatus() {
    console.log("reached log in button");
    getFacebookLoginStatus().then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      {!isConnected && (
        <button
          className="submit-btn"
          style={{ width: "100%" }}
          onClick={login}
        >
          Connect Page
        </button>
      )}
      {isConnected && (
        <button
          className="submit-btn"
          style={{ width: "100%" }}
          onClick={logout}
        >
          Disconnect
        </button>
      )}
      {/* <button onClick={getStatus}>status</button> */}
      {/* <button onClick={logout}>logout</button> */}
    </div>
  );
}
