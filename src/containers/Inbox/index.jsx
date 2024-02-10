import { RiRefreshLine } from "react-icons/ri";
import { InboxCard } from "../../components";
import "./styles.css";
import { useEffect, useState } from "react";
import { getMessenger } from "../../services/messenger";

const Inbox = ({ pageId, handleConversation }) => {
  const [inboxData, setInbox] = useState([]);

  async function getMessengerData() {
    const inbox = await getMessenger(pageId);
    setInbox(inbox.reverse());
  }

  useEffect(() => {
    getMessengerData();
  }, []);
  return (
    <div className="inbox-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid rgba(200, 200, 200)",
        }}
      >
        <span onClick={getMessengerData}>
          <RiRefreshLine style={{ cursor: "pointer", fontSize: "26px" }} />
        </span>
        <span className="inbox-heading">Conversations</span>
      </div>
      {inboxData &&
        inboxData.length > 0 &&
        inboxData.map((item, key) => {
          return (
            <InboxCard
              customerId={item.customerId}
              username={item.customerName}
              convType={item.convType}
              timestamp={item.lastMessageTimestamp.split("T")[0]}
              msgText={item.lastMessage}
              isRead={item.isRead}
              conversationId={item.conversation}
              handleConversation={handleConversation}
            />
          );
        })}
    </div>
  );
};

export default Inbox;
