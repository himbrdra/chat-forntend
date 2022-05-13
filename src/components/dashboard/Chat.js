import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { getMessagesHistory, sendDirectMessage } from "../../socketIo";
import {
  FileIcon,
  ImageIcon,
  ImojiIcon,
  SendIcon,
  Spinner,
  VideoIcon,
} from "../svg";
import Message from "./Message";
import store from "../store";
import CallOffer from "../call/CallOffer";

const Chat = ({ conversation, messages, directMessages, auth, call }) => {
  const containerRef = useRef();
  const [message, setMessage] = useState("");
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    if (conversation.id) {
      setIsLoading(true);
      getMessagesHistory({ reciverId: conversation.id });
      store.dispatch({ type: "CLEAR_DIRECT_MESSAGE", payload: [] });
      store.dispatch({ type: "SET_MESSAGES", payload: [] });
      setIsLoading(false);
    }
  }, [conversation.id, loading]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const sendTone = new Audio("/send_message.mp3");
    store.dispatch({
      type: "SET_DIRECT_MESSAGE",
      payload: { content: message, author: { _id: auth.user._id } },
    });
    sendTone.play();
    sendDirectMessage({ reciverId: conversation.id, content: message });
    setMessage("");
  };
  if (!conversation.id) return <h1>selecte conversation</h1>;
  return (
    <div ref={containerRef} className="chat">
      <div className="chat-area-main">
        {loading ? (
          <Spinner />
        ) : (
          messages.messages?.map((message) => {
            return <Message key={message._id} message={message} />;
          })
        )}
        {directMessages.map((message) => {
          if (message.length <= 0) return;
          return <Message key={message._id} message={message} />;
        })}
      </div>

      <div className="chat-area-footer">
        <div className="left__icon"></div>
        <div className="message__input-container">
          <form onSubmit={handleMessageSubmit}>
            <input
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="message__input"
              type="text"
              placeholder="type something"
            />
            <ImojiIcon />
            <button
              className="  send__message-btn transparent__btn"
              type="submit"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  conversation,
  messages,
  directMessages,
  auth,
  call,
}) => {
  return { conversation, messages, directMessages, auth, call };
};
export default connect(mapStateToProps)(Chat);
