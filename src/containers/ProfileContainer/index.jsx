import { FaTh, FaUserAlt, FaBars } from "react-icons/fa";
import pic from "../../assets/pic.png";
import { InboxCard } from "../../components";
import "./styles.css";
import { useEffect, useState } from "react";
import {
  getConversation,
  getCustomer,
  getMessenger,
} from "../../services/messenger";

const ProfileContainer = ({ customerId }) => {
  const [customer, setCustomer] = useState();

  async function getCustomerData() {
    const token = localStorage.getItem("token");
    const customer = await getCustomer(customerId, token);
    setCustomer(customer);
  }

  useEffect(() => {
    getCustomerData();
  }, [customerId]);

  if (customer) {
    return (
      <div className="profile-container">
        <div className="bg-white py-5">
          <div>
            <img
              src={`${customer.profile_pic}`}
              width="80px"
              style={{ borderRadius: "50%", background: "red" }}
            />
          </div>
          <div className="name-heading">
            <span>{`${customer.first_name} ${customer.last_name}`}</span>
            <p className="active-status-text">Offline</p>
          </div>
          <a href="#" className="profile-cta">
            Call
          </a>
          <a href="#" className="profile-cta">
            Profile
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="customer-details-container">
            <div className="customer-heading">
              <span>Customer Details</span>
              <div className="details">
                <span className="label-text">Email</span>
                <span className="value-text">noaccess@tofb.com</span>
              </div>
              <div className="details">
                <span className="label-text">First Name</span>
                <span className="value-text">{customer.first_name}</span>
              </div>
              <div className="details">
                <span className="label-text">Last Name</span>
                <span className="value-text">{customer.last_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>sasa</div>;
  }
};

export default ProfileContainer;
