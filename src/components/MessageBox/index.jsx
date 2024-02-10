import pic from "../../assets/pic.png";
import "./styles.css";

const MessageBox = ({
  isFirst = false,
  isCustomerMsg,
  messageBody,
  timeStamp,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: `${isCustomerMsg == true ? "flex-start" : "flex-end"}`,
        alignItems: "center",
      }}
    >
      {isFirst && isCustomerMsg && (
        <img
          src={pic}
          width="40px"
          height="40px"
          style={{ borderRadius: "50%", margin: "0px 5px" }}
        />
      )}
      {!isFirst && isCustomerMsg && (
        <div
          style={{
            width: "50px",
            height: "40px",
          }}
        ></div>
      )}
      <div className="msg-container">
        {messageBody} {isCustomerMsg}
      </div>
      {isFirst && !isCustomerMsg && (
        <img
          src={pic}
          width="40px"
          height="40px"
          style={{ borderRadius: "50%", margin: "0px 5px" }}
        />
      )}
      {!isFirst && !isCustomerMsg && (
        <div
          style={{
            width: "50px",
            height: "40px",
          }}
        ></div>
      )}
    </div>
  );
};

export default MessageBox;
