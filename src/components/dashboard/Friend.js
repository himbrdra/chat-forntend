import Avatar from "./Avatar";
import Status from "./Status";
import { connect } from "react-redux";
import { selectConversation } from "../actions";
const Freind = ({ friendList, selectConversation }) => {
  // console.log("onlineUsers", onlineUsers);
  return friendList.map((friends) => {
    if (!friends) return "";
    return friends.map((friend) => (
      <div
        onClick={() =>
          selectConversation({ id: friend?.id, username: friend?.username })
        }
        key={friend?.id}
        className="freind"
      >
        <Avatar username={friend?.username} />
        <Status userId={friend.id} />
      </div>
    ));
  });
};
const mapStateToProps = (state) => {
  const friendList = [...state.friendList];
  return { friendList };
};
export default connect(mapStateToProps, {
  selectConversation,
})(Freind);
