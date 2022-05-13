import CalleeImg from "./CalleeImg";
import CallOfferAction from "./CallOfferAction";
import CancelBtn from "./CancelBtn";
import { connect } from "react-redux";

const CallOffer = ({ type, username, user, call }) => {
  const handleCallAccept = () => {
    console.log("accepted", call.user.username);
  };
  return (
    <div className="call__container">
      <h2 className="call__type">Incomong {type}</h2>
      <CalleeImg username={username} />
      {user === "caller" ? (
        <CallOfferAction handleCallAccept={handleCallAccept} />
      ) : (
        <CancelBtn />
      )}
    </div>
  );
};
const mapStateToProps = ({ call }) => {
  return { call };
};
export default connect(mapStateToProps)(CallOffer);
