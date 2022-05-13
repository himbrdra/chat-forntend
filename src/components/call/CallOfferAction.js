const CallOfferAction = ({ handleCallAccept }) => {
  return (
    <div className="call__offer-action">
      <button onClick={handleCallAccept}>accept</button>
      <button>cancel</button>
    </div>
  );
};

export default CallOfferAction;
