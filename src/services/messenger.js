import axios from "axios";

// const baseURL = "https://5747-103-41-37-6.ngrok-free.app/api/v1";
const baseURL = "https://rp-helpdesk-e00f3381e623.herokuapp.com/api/v1";
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

const connectToFb = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const connection = await axios.post(`${baseURL}/fb/connect`, data, config);
  return connection.data;
};

const disconnectToFb = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const connection = await axios.post(`${baseURL}/fb/disconnect`, data, config);
  return connection.data;
};

const getPages = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const pages = await axios.get(`${baseURL}/fb/pages`, config);
  return pages.data;
};

const sendMsg = async (data) => {
  const msg = await axios.post(`${baseURL}/fb/messenger/send`, data);
  return msg.data;
};

const getFbAccount = async (clientId) => {
  const fbAccount = await axios.get(
    `${baseURL}/fb/fb-account?client=${clientId}`
  );
  return fbAccount.data;
};

export {
  getMessenger,
  getConversation,
  getCustomer,
  connectToFb,
  disconnectToFb,
  getPages,
  getFbAccount,
  sendMsg,
};
