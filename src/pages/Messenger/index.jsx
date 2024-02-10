import { useEffect, useState } from "react";
import {
  ConversationContainer,
  Inbox,
  ProfileContainer,
} from "../../containers";
import { Link } from "react-router-dom";
import "./styles.css";
import { getMessenger } from "../../services/messenger";

const Messenger = () => {
  const [pageId, setPageId] = useState();
  const [conversationId, setConversationId] = useState();
  const [customerId, setCustomerId] = useState();

  async function handleConversation(convId, customerId) {
    setConversationId(convId);
    setCustomerId(customerId);
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const pageParam = queryParams.get("page");
    setPageId(pageParam);
  });

  if (pageId != null) {
    return (
      <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-3 inbox-container">
            {pageId && (
              <Inbox pageId={pageId} handleConversation={handleConversation} />
            )}
          </div>
          <div className="col-6 conv-container">
            {conversationId && (
              <ConversationContainer conversationId={conversationId} />
            )}
          </div>
          <div className="col-3 profile-container">
            {customerId && <ProfileContainer customerId={customerId} />}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ margin: "20px" }}>
        <span>You have not selected any pages yet, </span>
        <Link to="/fb-pages">Click here</Link>
        <span> to select</span>
      </div>
    );
  }
};

export default Messenger;
