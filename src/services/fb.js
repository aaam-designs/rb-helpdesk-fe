import axios from "axios";

// const baseURL = "https://5747-103-41-37-6.ngrok-free.app/api/v1";
const baseURL = "http://localhost:4000/api/v1";
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
const getMessenger = async (pageId) => {
  const messenger = await axios.get(`${baseURL}/fb/messenger/${pageId}`);
  return messenger.data.conv;
};

const getConversation = async (convId) => {
  const conversation = await axios.get(`${baseURL}/fb/conversation/${convId}`);
  return conversation.data.conv;
};

const getCustomer = async (customerId) => {
  const customer = await axios.get(`${baseURL}/fb/customer/${customerId}`);
  return customer.data.customer;
};

const connectToFb = async (data) => {
  const connection = await axios.post(`${baseURL}/fb/connect`, data, config);
  return connection.data;
};

const disconnectToFb = async (data) => {
  const connection = await axios.post(`${baseURL}/fb/disconnect`, data, config);
  return connection.data;
};

export {
  getMessenger,
  getConversation,
  getCustomer,
  connectToFb,
  disconnectToFb,
};
