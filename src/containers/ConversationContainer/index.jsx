import { FaTh, FaUserAlt, FaBars } from "react-icons/fa";
import pic from "../../assets/pic.png";
import { InboxCard, MessageBox } from "../../components";
import "./styles.css";
import { useEffect, useState } from "react";
import {
  getConversation,
  getMessenger,
  sendMsg,
} from "../../services/messenger";

const ConversationContainer = ({ conversationId }) => {
  const [conversation, setConversation] = useState();
  const [msgText, setMsgText] = useState("");
  // const [messages, setMessages] = useState();

  async function getConversationData() {
    const conversation = await getConversation(conversationId);
    setConversation(conversation);
    // setMessages(conversation.messages.reverse());
  }

  const handleInputChange = (e) => {
    setMsgText(e.target.value);
  };

  async function sendMessage(e) {
    e.preventDefault();
    const msgData = {
      client: conversation.client,
      pageId: conversation.pageId,
      customerId: conversation.customerId,
      messageText: msgText,
    };
    await sendMsg(msgData);
    setMsgText("");
    getConversationData();
  }

  useEffect(() => {
    getConversationData();
  }, [conversationId]);

  if (conversation) {
    return (
      <div className="conv-container">
        <div
          style={{
            // display: "flex",
            // flexDirection: "row",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid rgba(200, 200, 200)",
            background: "white",
          }}
        >
          <span className="inbox-heading">{conversation.customerName}</span>
        </div>
        <br />
        <div
          style={{
            overflow: "scroll",
          }}
        >
          <div
            style={{
              // overflow: "scroll",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {conversation.messages &&
              conversation.messages.map((msg) => {
                return (
                  <MessageBox
                    isFirst={msg.isFirst}
                    isCustomerMsg={msg.isCustomerMessage}
                    messageBody={msg.messageBody}
                    timeStamp={msg.timeStamp}
                  />
                );
              })}
          </div>
          <div
            style={{
              padding: "20px",
              position: "sticky",
              background: "#f0f0f0",
              bottom: "0px",
              left: "0px",
            }}
          >
            <form onSubmit={sendMessage}>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #d0d0f0",
                }}
                placeholder="Reply"
                onChange={handleInputChange}
                name="msgText"
                value={msgText}
              />
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ConversationContainer;
