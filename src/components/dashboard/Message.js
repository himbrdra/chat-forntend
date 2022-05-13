import Avatar from "./Avatar";
import { connect } from "react-redux";
const Message = ({ message, user }) => {
  if (!message) return;
  const textMessage = (
    <div
      className={`message__container ${
        message.author._id !== user._id ? "reciver" : "sender"
      }
        
      `}
    >
      <p className="message">{message.content}</p>
    </div>
  );
  const messageWithAvatar = (
    <div className="avatar__message">
      <Avatar />
      <p>heeloo again</p>
    </div>
  );
  return textMessage;
};
const mapStateToProps = ({ auth }) => {
  return { ...auth };
};
export default connect(mapStateToProps)(Message);
