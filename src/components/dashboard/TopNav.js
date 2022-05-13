import { sendPreeOffer } from "../../webRTC";
import Avatar from "./Avatar";
import { connect } from "react-redux";
import { useState } from "react";
import CallOffer from "../call/CallOffer";
import { CallIcon, VideoIcon } from "../svg";

const TopNav = ({ conversation }) => {
  const [callUi, setCallUi] = useState(false);

  const handleCallBtnClick = () => {
    sendPreeOffer("call", conversation.id);
    setCallUi(true);
  };
  return (
    <>
      {callUi ? <CallOffer user={"callee"} /> : ""}

      {conversation.username && (
        <>
          <div className="top__nav">
            {<Avatar username={conversation.username} />}
          </div>
          <button
            onClick={handleCallBtnClick}
            className="call__btn transparent__btn"
          >
            <CallIcon />
          </button>
          <button className="video__call-btn transparent__btn">
            <VideoIcon />
          </button>
        </>
      )}
    </>
  );
};
const mapStateToProps = ({ conversation }) => {
  return { conversation };
};
export default connect(mapStateToProps)(TopNav);
