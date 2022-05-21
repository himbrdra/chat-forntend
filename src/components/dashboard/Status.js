import { connect } from "react-redux";
const Status = ({ userId, onlineUsers }) => {
  let className = "offline";
  onlineUsers.forEach((user) => {
    if (user.userId === userId) {
      return (className = "online");
    }
  });
  console.log(className);
  return <div className={className}></div>;
};
const mapStateToProps = ({ onlineUsers }) => {
  return { onlineUsers };
};
export default connect(mapStateToProps)(Status);
