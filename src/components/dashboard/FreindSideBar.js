import Freind from "./Friend";
import Invitaion from "./Invitaion";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useState } from "react";
import { connect } from "react-redux";
import { sendInvitaion } from "../actions";
import { InvitIcon } from "../svg";
import {Spinner} from '../svg'

const FreindSideBar = ({ sendInvitaion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading,setIsLoading] = useState(false)

  const handleAddFriendClick = () => {
    sendInvitaion({ email },setIsLoading);
  };

  return (
    <div className="freind__side-bar">
      <div className="freind__list">
        <div className="add__freind-container">
          <button onClick={() => setIsOpen(true)} className="add__freind-btn">
            <InvitIcon />
            invit
          </button>
        </div>
        <Dialog className="dialog" aria-label="add__friend" isOpen={isOpen}>
          {loading ?<Spinner />:(
            <>
          <button onClick={() => setIsOpen(false)} className="close__modal">
            close
          </button>
          <div className="add__friend-container">
            <input
              className="invit__input"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your friend email "
            />
          </div>
          <div className="add__freind-actions">
            <button
              className="cancel__invit-btn"
              onClick={() => setIsOpen(false)}
              type="submit"
            >
              cancel
            </button>
            <button
              className="send__invit-btn"
              onClick={handleAddFriendClick}
              type="submit"
            >
              add
            </button>
          </div>
            </>
          )}
        </Dialog>
        <div className="private__chat-container">
          <p className="private__chat-text">PRIVATE CHAT</p>
        </div>
        <Freind />
      </div>
      <div className="invitaion__req">
        <p className="invitaion__text">INVITAION</p>
        <div className="invitaion__list">
          <Invitaion />
        </div>
      </div>
    </div>
  );
};
export default connect(null, { sendInvitaion })(FreindSideBar);
