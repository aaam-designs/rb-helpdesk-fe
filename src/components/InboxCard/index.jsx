import pic from "../../assets/pic.png";
import "./styles.css";

const InboxCard = ({
  customerId,
  username,
  convType,
  conversationId,
  timestamp,
  msgText,
  isRead,
  handleConversation,
}) => {
  return (
    <div
      className={`card-container ${!isRead ? "unread" : "read"}`}
      onClick={() => {
        handleConversation(conversationId, customerId);
      }}
    >
      <div className="top-container">
        <div className="top-container">
          <input type="checkbox" />
          <div className="text-src">
            <p className="username-text">{username}</p>
            <div className="msg-src-text">Facebook {convType}</div>
          </div>
        </div>
        <span className="timestamp-text">{timestamp}</span>
      </div>
      <div className="custom-text">Awesome Product</div>
      <div className="msg-text">{msgText}</div>
    </div>
  );
};

export default InboxCard;
