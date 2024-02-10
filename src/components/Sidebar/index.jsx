import { FaTh, FaUserAlt, FaBars } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import {
  RiDashboardLine,
  RiPagesFill,
  RiMessengerFill,
  RiShoppingCartFill,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState } from "react";

const Sidebar = ({ children, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/dashboard", name: "Dashboard", icon: <RiDashboardLine /> },
    { path: "/fb-pages", name: "Pages", icon: <RiPagesFill /> },
    { path: "/messenger", name: "Messenger", icon: <RiMessengerFill /> },
  ];
  return (
    <div className="main_container">
      <div
        style={{ width: isOpen ? "300px" : "50px" }}
        className="sidebar"
        // onMouseEnter={toggle}
        // onMouseLeave={toggle}
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            FbHelp
          </h1>
          <div
            style={{ marginLeft: isOpen ? "150px" : "0px" }}
            className="bars"
          >
            <FaBars style={{ cursor: "pointer" }} onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, idx) => (
          <NavLink
            to={item.path}
            key={idx}
            className="link"
            // activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div
          className="logout-link"
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
          }}
          onClick={() => {
            handleLogout();
          }}
        >
          <div className="icon">
            <RiLogoutBoxLine />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Logout
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
