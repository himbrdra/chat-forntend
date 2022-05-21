import { check, cross } from "../svg";
import Avatar from "./Avatar";

import { connect } from "react-redux";
import { acceptInvit, rejectInvit } from "../actions";
import { useState } from "react";

const Invitaion = ({ invitaions, acceptInvit, rejectInvit }) => {
  console.log(invitaions);
  const [state, setState] = useState("");
  return invitaions.map((invitaion) => {
    const handleAcceptInvitation = () => {
      setState("none");
      acceptInvit({
        invitaionId: invitaion._id,
        senderId: invitaion.senderId._id,
      });
    };

    const handleRejectInvitaion = () => {
      rejectInvit({
        invitaionId: invitaion._id,
        senderId: invitaion.senderId._id,
      });
    };
    const { username } = invitaion.senderId;
    return (
      <div key={invitaion._id} className={`freind invitaion`}>
        <Avatar image={invitaion.senderId.image} username={username} />
        <div className="invitaion__action">
          <button
            onClick={handleAcceptInvitation}
            className="accept transparent__btn"
          >
            {check}
          </button>
          <button
            onClick={handleRejectInvitaion}
            className="denied transparent__btn"
          >
            {cross}
          </button>
        </div>
      </div>
    );
  });
};
const mapStatetoProps = (state) => {
  return { invitaions: state.invitaions };
};
export default connect(mapStatetoProps, {
  acceptInvit,
  rejectInvit,
})(Invitaion);
